/**
 * Navigation between the dev pages, added to every page in dev/.
 *
 * Load it in <head> with `<script defer src="/dev-nav.js"></script>`. Add new
 * pages to PAGES below. The menu is fixed to a corner, so it doesn't change the
 * layout that speccer measures.
 */
const PAGES = [
  ['index.html', 'Overview'],
  ['demo.html', 'Demo'],
  ['themes.html', 'Themes'],
  ['modes.html', 'Activation modes'],
  ['pin.html', 'Pin'],
  ['pin-align-parent.html', 'Pin, align to parent'],
  ['pin-text.html', 'Pin with text'],
  ['pin-on-click.html', 'Pin on click'],
  ['mark.html', 'Mark'],
  ['measure.html', 'Measure'],
  ['spacing.html', 'Spacing'],
  ['typography.html', 'Typography'],
  ['grid.html', 'Grid'],
  ['a11y.html', 'Accessibility']
];
const STYLES = `
  .dev-nav {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 2147483647;
    font: 14px/1.5 system-ui, sans-serif;
    color: #1a1a1a;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 15%);
  }

  .dev-nav summary {
    padding: 0.5rem 0.75rem;
    font-weight: 600;
    cursor: pointer;
  }

  .dev-nav ul {
    max-height: 70vh;
    margin: 0;
    padding: 0 0.75rem 0.5rem;
    overflow-y: auto;
    list-style: none;
  }

  .dev-nav a {
    display: block;
    padding: 0.125rem 0;
    color: inherit;
  }

  .dev-nav a[aria-current='page'] {
    font-weight: 700;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    .dev-nav {
      color: #eee;
      background-color: #222;
      border-color: #444;
    }
  }
`;
const current = location.pathname.split('/').pop() || 'index.html';
const style = document.createElement('style');
const nav = document.createElement('nav');
const details = document.createElement('details');
const summary = document.createElement('summary');
const list = document.createElement('ul');

style.textContent = STYLES;
nav.className = 'dev-nav';
nav.setAttribute('aria-label', 'Dev pages');
summary.textContent = 'Pages';
details.open = current === 'index.html';

for (const [page, title] of PAGES) {
  const item = document.createElement('li');
  const link = document.createElement('a');

  link.href = `/${page}`;
  link.textContent = title;

  if (page === current) link.setAttribute('aria-current', 'page');

  item.appendChild(link);
  list.appendChild(item);
}

details.append(summary, list);
nav.appendChild(details);
document.head.appendChild(style);
document.body.appendChild(nav);
