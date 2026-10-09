/* node:coverage disable */
/**
 * Static file server for the Playwright tests.
 *
 * Serves the pages in `dev/` and the build in `dist/` from the same root, so
 * `/pin.html` comes from `dev/` and `/speccer.js` from `dist/`. No
 * dependencies, so CI doesn't have to download a dev server on every run.
 *
 * Usage: node tests/e2e/server.mjs [port]
 */
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..'
);
const DIRS = [path.join(ROOT, 'dev'), path.join(ROOT, 'dist')];
const PORT = Number(process.argv[2] ?? process.env.PORT ?? 3000);
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

/**
 * Finds the first file matching the URL path in `dev/`, then `dist/`.
 *
 * @param {string} urlPath - The decoded URL path.
 * @returns {Promise<string|undefined>} The file path, if any.
 */
const resolveFile = async (urlPath) => {
  const relative = urlPath.endsWith('/') ? `${urlPath}index.html` : urlPath;

  for (const dir of DIRS) {
    const file = path.join(dir, relative);

    // Don't serve anything outside dev/ and dist/
    if (!file.startsWith(dir + path.sep)) continue;

    const stats = await stat(file).catch(() => undefined);

    if (stats?.isFile()) return file;
  }
};

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  const file = await resolveFile(decodeURIComponent(pathname));

  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');

    return;
  }

  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  createReadStream(file).pipe(res);
}).listen(PORT, '127.0.0.1', () => {
  console.log(`Serving dev/ and dist/ on http://127.0.0.1:${PORT}`);
});
