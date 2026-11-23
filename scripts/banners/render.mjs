// Renders the release banners for a major release into docs/public/images, in
// the look of the docs site: the dark radial background, the yellow brand
// colour and the system fonts. Four formats (banner, og, square, portrait),
// each at 1x and 2x, as palette PNGs. The annotations on the card are drawn by
// speccer itself, from the build in dist.
//
// Usage: npm run build, then npm run banners -- <release>, e.g. 11.0
// The content is in scripts/banners/<release>.mjs. Rendering uses a local
// Chrome or Chromium (CHROME=/path/to/chrome to choose one) and the docs
// site's system fonts, so nothing is fetched from the network, and Python
// with Pillow to make the PNGs small.
import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));
const OUT = join(ROOT, 'docs', 'public', 'images');
const CHROME = process.env.CHROME ?? 'google-chrome';
// The tall formats are laid out at 720 CSS pixels wide and rendered at 1.5x,
// so speccer measures the same pixels it draws
const FORMATS = [
  { suffix: '', width: 1200, height: 600, zoom: 1, layout: 'wide' },
  { suffix: '-og', width: 1200, height: 630, zoom: 1, layout: 'wide' },
  { suffix: '-square', width: 720, height: 720, zoom: 1.5, layout: 'tall' },
  { suffix: '-portrait', width: 720, height: 900, zoom: 1.5, layout: 'tall' }
];
const SCALES = [1, 2];
const release = process.argv[2];
const umd = join(ROOT, 'dist', 'speccer.js');

if (!release) {
  console.error('Usage: npm run banners -- <release>, e.g. 11.0');
  process.exit(1);
}

if (!existsSync(umd)) {
  console.error('dist/speccer.js is missing: run npm run build first');
  process.exit(1);
}

const { default: content } = await import(
  pathToFileURL(join(ROOT, 'scripts', 'banners', `${release}.mjs`)).href
);
const escape = (text) =>
  String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
// Inlined, so the page needs no file access; </script> can't appear in it
const script = readFileSync(umd, 'utf8').replaceAll('</script', '<\\/script');
const styles = readFileSync(join(ROOT, 'dist', 'speccer.css'), 'utf8');
const mark = readFileSync(
  join(ROOT, 'docs', 'public', 'logo-speccer-symbol-yellow.svg'),
  'utf8'
).replace('<svg', '<svg class="mark"');
const title = content.title
  .map((part) =>
    typeof part === 'string'
      ? escape(part)
      : `<span class="accent">${escape(part.accent)}</span>`
  )
  .join('<br>');
const { card } = content;
const page = (layout, format) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><style>
${styles}
/* The colours of docs/.vitepress/theme/ph/variables.css, dark theme */
:root { --bg: #181a22; --bg-2: #262a3b; --well: #262831; --line: #353a4d;
  --text: #e4e4e7; --muted: #9fa8ad; --brand: #ffc72c;
  --sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
  --mono: 'Menlo for Powerline', 'Menlo Regular for Powerline', 'DejaVu Sans Mono',
    Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; }
/* speccer's colours on a dark page, as in dev/spacing.html */
.ph-speccer.speccer { --ph-speccer-base-color: var(--brand); --ph-speccer-pin-color: var(--brand);
  --ph-speccer-spacing-padding-color: #46db00;
  --ph-speccer-spacing-padding-color-background: rgba(70, 219, 0, 0.12);
  --ph-speccer-measure-color: #00c9f2; --ph-speccer-color-text-light: #000; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 100%; height: 100%; }
body { position: relative; overflow: hidden; color: var(--text); font-family: var(--sans);
  background: radial-gradient(circle at 70% 50%, var(--bg-2) 0, var(--bg) 70%) var(--bg); }
.pill { position: absolute; display: inline-flex; align-items: center; gap: 14px;
  padding: 10px 22px 10px 14px; border: 1px solid var(--line); border-radius: 999px;
  background: var(--bg); font: 400 17px var(--mono); letter-spacing: 0.02em; color: var(--muted); }
.pill .mark { width: 40px; height: 19px; }
h1 { position: absolute; font-weight: 700; line-height: 1.04; letter-spacing: -0.03em; }
.accent { color: var(--brand); }
p { position: absolute; color: var(--muted); line-height: 1.5; }
/* speccer draws wider on the left (the padding labels) than on the right (the
   pins), so the card sits a little right of the middle */
.diagram { position: absolute; display: flex; align-items: center; justify-content: center;
  padding-left: 50px; }
.card { display: flex; flex-direction: column; gap: 16px; width: 300px; padding: 24px 28px;
  border: 1px solid var(--line); border-radius: 12px; background: var(--well);
  box-shadow: 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%); }
.card h2 { font-size: 20px; font-weight: 600; color: var(--text); }
.card strong { font-size: 36px; font-weight: 700; line-height: 1; color: var(--text); }
.card button { align-self: start; padding: 10px 16px; border: 0; border-radius: 6px;
  background: var(--brand); color: #000; font: 600 15px var(--sans); }
/* Every box speccer measures is placed from the top: headless Chrome lays the
   page out at a shorter height before it takes the screenshot */
/* wide: text left, the card right */
.wide .pill { top: 60px; left: 72px; }
.wide h1 { top: 168px; left: 72px; width: 600px; font-size: 64px; }
.wide p { bottom: 64px; left: 72px; width: 560px; font-size: 20px; }
.wide .diagram { top: 64px; right: 40px; width: 500px; height: 472px; }
.og .wide .diagram { top: 79px; }
/* tall: text on top, the card below */
.tall .pill { top: 48px; left: 48px; font-size: 14px; }
.tall h1 { top: 124px; left: 48px; width: 624px; font-size: 64px; }
.tall p { top: 290px; left: 48px; width: 624px; font-size: 18px; }
.tall .diagram { top: 390px; left: 48px; right: 48px; height: 300px; }
.portrait .tall .diagram { top: 400px; height: 480px; }
.portrait .card { width: 360px; gap: 22px; padding: 32px 36px; }
.portrait .card h2 { font-size: 24px; }
.portrait .card strong { font-size: 44px; }
.portrait .card button { padding: 12px 20px; font-size: 18px; }
</style></head>
<body class="${format}"><main class="${layout}">
  <div class="pill">${mark}${escape(content.pill)}</div>
  <h1>${title}</h1>
  <p>${escape(content.body)}</p>
  <div class="diagram">
    <div data-speccer="measure width top">
      <div data-speccer="pin-area">
        <div class="card" data-speccer="spacing padding">
          <h2 data-speccer="pin right">${escape(card.heading)}</h2>
          <strong data-speccer="pin right">${escape(card.value)}</strong>
          <button data-speccer="pin bottom">${escape(card.action)}</button>
        </div>
      </div>
    </div>
  </div>
</main>
<svg class="ph-speccer" id="ph-speccer-svg" xmlns="http://www.w3.org/2000/svg">
  <path class="ph-speccer path original" id="ph-speccer-path" fill="none" stroke-width="1" stroke="currentColor"></path>
</svg>
<script>
  // Chrome's --screenshot runs on virtual time, which moves timers but draws
  // no frames, so speccer's waitForFrame would never resolve
  window.requestAnimationFrame = (callback) => setTimeout(() => callback(performance.now()), 16);
</script>
<script>${script}</script>
<script>speccer.default();</script>
</body></html>`;
const dir = mkdtempSync(join(tmpdir(), 'speccer-banners-'));
const written = [];

mkdirSync(OUT, { recursive: true });

try {
  for (const { suffix, width, height, zoom, layout } of FORMATS) {
    const file = join(dir, `${suffix || 'banner'}.html`);

    writeFileSync(file, page(layout, suffix.slice(1)));

    for (const scale of SCALES) {
      const path = join(
        OUT,
        `speccer-${content.slug}${suffix}${scale === 2 ? '@2x' : ''}.png`
      );

      execFileSync(
        CHROME,
        [
          '--headless=new',
          '--disable-gpu',
          '--hide-scrollbars',
          '--virtual-time-budget=3000',
          `--force-device-scale-factor=${zoom * scale}`,
          `--window-size=${width},${height}`,
          `--screenshot=${path}`,
          pathToFileURL(file).href
        ],
        { stdio: 'ignore' }
      );
      written.push(path);
    }
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}

// A palette of up to 256 colours keeps flat artwork sharp and small
execFileSync(
  'python3',
  [
    '-c',
    `import sys
from PIL import Image
for path in sys.argv[1:]:
    Image.open(path).convert('RGB').quantize(256, method=Image.Quantize.MEDIANCUT).save(path, optimize=True)`,
    ...written
  ],
  { stdio: 'inherit' }
);

for (const path of written) {
  console.log(`${relative(ROOT, path)}: ${statSync(path).size} bytes`);
}
