// Check what npm would publish: pack the package, check the tarball holds the
// files package.json points at, its LICENSE, README and CHANGELOG, and no
// tests, lint it with publint and @arethetypeswrong/cli, then install it in an
// empty project, check every source map resolves, and load speccer through
// import, require, the old dist paths, the CSS paths, the UMD build and a
// browser bundle. It also checks that the ES module and CommonJS builds bundle
// no dependencies. Run after `npm run build`.
//
// speccer needs a DOM when it loads, so Node gets one from global-jsdom, and
// the UMD build and the browser bundle run in a jsdom window.
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { JSDOM } from 'jsdom';
import { rollup } from 'rollup';

import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const BIN = join(ROOT, 'node_modules', '.bin');
const DOM_IMPORT = pathToFileURL(
  join(ROOT, 'node_modules', 'global-jsdom', 'esm', 'register.mjs')
).href;
const DOM_REQUIRE = join(
  ROOT,
  'node_modules',
  'global-jsdom',
  'commonjs',
  'register.cjs'
);
// Exports every entry point must have, next to whatever else `import` gives
const EXPECTED = [
  'a11y',
  'default',
  'grid',
  'mark',
  'measure',
  'modes',
  'pin',
  'removeSpeccerElement',
  'spacing',
  'typography'
];
/** Run a linter; return its output if it fails. */
const lint = (command, args) => {
  try {
    execFileSync(join(BIN, command), args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: 'pipe'
    });

    return undefined;
  } catch (error) {
    return `${error.stdout ?? ''}${error.stderr ?? ''}`.trim();
  }
};
// A bare package name after from, import( or require(
const IMPORT =
  /(?:\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)["']([^"'.][^"']*)["']/g;
/** Every .map file under dir. */
const mapsIn = (dir) =>
  readdirSync(dir, { recursive: true })
    .filter((file) => file.endsWith('.map'))
    .map((file) => join(dir, file));
const npm = (args, cwd) =>
  execFileSync('npm', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit']
  });
/** Every file path a package.json points at, without the leading ./ */
const entryPoints = (pkg) => {
  const paths = [];
  const collect = (value) => {
    if (typeof value === 'string') paths.push(value);
    else if (value && typeof value === 'object')
      Object.values(value).forEach(collect);
  };

  collect(pkg.exports);
  collect(pkg.main);
  collect(pkg.module);
  collect(pkg.types);
  collect(pkg.unpkg);
  collect(pkg.jsdelivr);

  // Subpath patterns such as ./dist/* are not files
  return paths
    .filter((path) => !path.includes('*'))
    .map((path) => path.replace(/^\.\//, ''));
};
/** The sorted export names of a module namespace or exports object. */
const namesOf = (exports) => Object.keys(exports ?? {}).sort();
/** Runs code in a fresh jsdom window and returns the window. */
const inWindow = (code, setup = () => {}) => {
  const { window } = new JSDOM('<!doctype html><body></body>', {
    runScripts: 'outside-only'
  });

  setup(window);
  window.eval(code);

  return window;
};
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
const work = mkdtempSync(join(tmpdir(), 'speccer-pack-'));
const problems = [];

try {
  const output = JSON.parse(
    npm(['pack', '--json', '--pack-destination', work], ROOT)
  );
  // An array in npm 11, an object keyed by package name in npm 12
  const packed = Array.isArray(output) ? output[0] : Object.values(output)[0];
  const files = new Set(packed.files.map((file) => file.path));

  // npm adds LICENSE and README.md on its own, if the package has them
  for (const path of [
    ...entryPoints(pkg),
    'LICENSE',
    'README.md',
    'CHANGELOG.md'
  ]) {
    if (!files.has(path)) problems.push(`${path} is not in the tarball`);
  }

  for (const path of files) {
    if (/(^|\/)__tests__\/|\.spec\.[jt]s$|\.tsbuildinfo$/.test(path)) {
      problems.push(`${path} should not be published`);
    }
  }

  const tarball = join(work, packed.filename);
  const types = lint('attw', [tarball]);
  const publint = lint('publint', ['--strict', tarball]);

  if (types) problems.push(`@arethetypeswrong/cli:\n${types}`);

  if (publint) problems.push(`publint:\n${publint}`);

  console.log(
    `${pkg.name}@${pkg.version}: ${files.size} files, ${packed.size} bytes`
  );

  if (problems.length === 0) {
    const app = join(work, 'app');
    const installed = join(app, 'node_modules', pkg.name);

    mkdirSync(app);
    writeFileSync(
      join(app, 'package.json'),
      '{ "name": "app", "private": true }\n'
    );
    npm(
      [
        'install',
        '--no-audit',
        '--no-fund',
        '--ignore-scripts',
        // The dependencies come from the registry, preferably the cache
        '--prefer-offline',
        tarball
      ],
      app
    );

    // Runtime dependencies are declared, never bundled: the ES module and
    // CommonJS builds may not contain code from node_modules, and every
    // package they import must be a dependency. Only the UMD build (unpkg),
    // for script tags, may inline them.
    const declared = new Set([
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.peerDependencies ?? {})
    ]);
    const importsOf = new Map();
    const moduleBuilds = new Set(
      [
        pkg.exports?.['.']?.import?.default,
        pkg.exports?.['.']?.require?.default,
        pkg.main,
        pkg.module
      ]
        .filter(Boolean)
        .map((path) => path.replace(/^\.\//, ''))
    );

    for (const file of moduleBuilds) {
      const code = readFileSync(join(installed, file), 'utf8');
      const map = `${join(installed, file)}.map`;
      const inlined = existsSync(map)
        ? JSON.parse(readFileSync(map, 'utf8')).sources.filter((source) =>
            source.includes('node_modules/')
          )
        : [];
      const imported = [...code.matchAll(IMPORT)]
        .map(([, specifier]) => specifier)
        .filter((specifier) => !specifier.startsWith('node:'))
        .map((specifier) =>
          specifier
            .split('/')
            .slice(0, specifier.startsWith('@') ? 2 : 1)
            .join('/')
        );

      for (const source of inlined) {
        problems.push(
          `${file} inlines ${source}; declare it in dependencies and keep it external`
        );
      }

      for (const name of new Set(imported)) {
        if (!declared.has(name))
          problems.push(`${file} imports ${name}, which isn't in dependencies`);
      }

      importsOf.set(file, new Set(imported));
    }

    // A browser can't resolve the bare imports of the ES module build, so the
    // README must not load that file from a CDN as is (?module, /+esm or an
    // import map resolve them)
    const esmBuild = (
      pkg.exports?.['.']?.import?.default ?? pkg.module
    )?.replace(/^\.\//, '');

    if (esmBuild && importsOf.get(esmBuild)?.size) {
      const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
      const raw = new RegExp(
        `https://[^\\s'"]+/${esmBuild.replaceAll('.', '\\.')}(?!\\?module)['"\\s]`,
        'g'
      );

      for (const [url] of readme.matchAll(raw)) {
        problems.push(
          `README.md loads ${url.slice(0, -1)} in a browser, but ${esmBuild} imports ${[...importsOf.get(esmBuild)].join(', ')}, which a browser can't resolve`
        );
      }
    }

    // Our own sources must be published next to the maps; bundled
    // dependencies are not installed, so their source must be embedded
    for (const map of mapsIn(installed)) {
      const { sources, sourcesContent = [] } = JSON.parse(
        readFileSync(map, 'utf8')
      );

      sources.forEach((source, index) => {
        const resolves = source.includes('node_modules/')
          ? typeof sourcesContent[index] === 'string'
          : existsSync(join(dirname(map), source));

        if (!resolves) {
          problems.push(
            `${relative(installed, map)} points at ${source}, which isn't published`
          );
        }
      });
    }

    // Every way of loading speccer must give the same exports as import
    const expected = JSON.stringify(EXPECTED);
    const check = `
      const check = (how, exports) => {
        const names = Object.keys(exports ?? {}).sort();
        const missing = ${expected}.filter((name) => !names.includes(name));
        if (missing.length) throw new Error(how + ': missing ' + missing.join(', ') + ' (got ' + (names.join(', ') || 'nothing') + ')');
        if (typeof exports.default !== 'function') throw new Error(how + ': default export is ' + typeof exports.default);
        console.log(how + ': ' + names.length + ' exports');
        return names.join();
      };
    `;
    const name = JSON.stringify(pkg.name);
    const smokes = {
      'ES module import': [
        '--import',
        DOM_IMPORT,
        '--input-type=module',
        '-e',
        `${check} check('import', await import(${name}));`
      ],
      'CommonJS require': [
        '--require',
        DOM_REQUIRE,
        '--input-type=commonjs',
        '-e',
        `${check} check('require', require(${name}));`
      ],
      // Server-side rendering: loading speccer without a DOM must not throw
      'ES module import without a DOM': [
        '--input-type=module',
        '-e',
        `${check} check('import without a DOM', await import(${name}));`
      ],
      'CommonJS require without a DOM': [
        '--input-type=commonjs',
        '-e',
        `${check} check('require without a DOM', require(${name}));`
      ],
      // Deep imports worked before exports existed, and must keep working
      'dist path import': [
        '--import',
        DOM_IMPORT,
        '--input-type=module',
        '-e',
        `${check} check('dist path', await import(${JSON.stringify(`${pkg.name}/dist/speccer.esm.js`)}));`
      ],
      // Stylesheets are imported by path, for example by bundlers
      'CSS paths': [
        '--input-type=module',
        '-e',
        `import { createRequire } from 'node:module';
         const require = createRequire(import.meta.url);
         for (const css of ['dist/speccer.css', 'dist/speccer.min.css']) {
           import.meta.resolve(${name} + '/' + css);
           require.resolve(${name} + '/' + css);
           console.log('CSS path: ' + css);
         }`
      ]
    };

    for (const [how, args] of Object.entries(smokes)) {
      try {
        execFileSync('node', args, { cwd: app, stdio: 'inherit' });
      } catch {
        problems.push(`${how} of the installed tarball failed`);
      }
    }

    const verify = (how, exports) => {
      const names = namesOf(exports);
      const missing = EXPECTED.filter((name) => !names.includes(name));

      if (missing.length || typeof exports?.default !== 'function')
        throw new Error(
          `missing ${missing.join(', ') || 'a default function'} (got ${names.join(', ') || 'nothing'})`
        );

      console.log(`${how}: ${names.length} exports`);
    };

    if (pkg.unpkg) {
      const umd = readFileSync(join(installed, pkg.unpkg), 'utf8');

      // A <script> tag: no module system, the UMD build sets a global
      try {
        verify('UMD global', inWindow(umd).speccer);
      } catch (error) {
        problems.push(
          `UMD script global of the installed tarball failed: ${error.message}`
        );
      }

      // An AMD or CommonJS loader running the UMD build
      try {
        const window = inWindow(umd, (window) => {
          window.module = { exports: {} };
          window.exports = window.module.exports;
        });

        verify('UMD CommonJS', window.module.exports);
      } catch (error) {
        problems.push(
          `UMD under CommonJS of the installed tarball failed: ${error.message}`
        );
      }
    } else {
      problems.push('package.json has no "unpkg" field for the UMD build');
    }

    // A browser bundler resolving the package from the app
    try {
      const entry = join(app, 'entry.js');

      writeFileSync(
        entry,
        `import * as speccer from ${name};\nwindow.result = speccer;\n`
      );

      const bundle = await rollup({
        input: entry,
        plugins: [nodeResolve({ browser: true, rootDir: app })]
      });
      const { output } = await bundle.generate({ format: 'iife' });

      await bundle.close();
      verify('browser bundle', inWindow(output[0].code).result);
    } catch (error) {
      problems.push(
        `a browser bundle of the installed tarball failed: ${error.message}`
      );
    }
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (problems.length > 0) {
  console.error('\nThe package would not publish correctly:\n');
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error(
    '\nCheck "files" in package.json, and run npm run build first.'
  );
  process.exit(1);
}

console.log(`\n${pkg.name} packs, installs, and works from every entry point.`);
