# Contributing to speccer

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the
[Table of Contents](#table-of-contents) for different ways to help and details
about how this project handles them. Please read the relevant section before
making your contribution. It makes it a lot easier for the maintainer and
smooths out the experience for everyone involved.

> And if you like the project, but don't have time to contribute, that's fine.
> There are other easy ways to support the project and show your appreciation:
>
> - Star the project
> - Mention it in your project's readme
> - Tell your friends and colleagues about it

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Contributing Code](#contributing-code)
    - [Architecture](#architecture)
    - [Development](#development)
    - [Coding Style](#coding-style)
    - [Tests](#tests)
    - [Developer Certificate of Origin](#developer-certificate-of-origin)
    - [Commits and Pull Requests](#commits-and-pull-requests)
    - [Releases](#releases)
- [Attribution](#attribution)

## Code of Conduct

This project and everyone participating in it is governed by the
[speccer Code of Conduct](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report
unacceptable behaviour to <code-of-conduct@phun-ky.net>.

## I Have a Question

> If you want to ask a question, we assume that you have read the documentation
> on [speccer.dev](https://speccer.dev/guide/introduction/).

Before you ask a question, search the existing
[issues](https://github.com/phun-ky/speccer/issues) that might help you. If you
find a suitable issue and still need clarification, write your question in that
issue.

If you still need to ask a question:

- Open an [issue](https://github.com/phun-ky/speccer/issues/new).
- Provide as much context as you can about what you're running into.
- Provide the versions of speccer and the browser, and how you load it (a
  bundler, a script tag or a framework), as relevant.

## I Want To Contribute

> ### Legal Notice
>
> When contributing to this project, you must agree that you have authored 100%
> of the content, that you have the necessary rights to the content and that the
> content you contribute may be provided under the project licence. You confirm
> this on every commit by signing it off under the
> [Developer Certificate of Origin](#developer-certificate-of-origin).

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more
information. Please:

- Make sure that you are using the latest version.
- Check that it's really a bug and not an error on your side, for example a
  missing CSS file or a missing `#ph-speccer-svg` element. Read the
  [documentation](https://speccer.dev/guide/introduction/) first.
- Search the
  [bug tracker](https://github.com/phun-ky/speccer/issues?q=label%3A%22problems%3A+%F0%9F%90%9B+bug%22)
  to see if the bug has already been reported.
- Collect information about the bug:
  - the error message or warning in the browser console
  - the browser and its version, and the bundler or framework if you use one
  - how you load speccer (`import`, `require` or a script tag) and which mode
    (`data-dom`, `data-lazy`, `data-instant` or `data-manual`)
  - the HTML of the annotated element, with its `data-speccer` attribute
  - whether you can reproduce it reliably, and with older versions

#### How Do I Submit a Good Bug Report?

> Never report security issues, vulnerabilities or bugs that include sensitive
> information in the issue tracker or elsewhere in public. Report them privately
> as described in the [security policy](SECURITY.md#reporting-a-vulnerability).

Bugs are tracked as GitHub issues. If you run into a problem:

- Open an [issue](https://github.com/phun-ky/speccer/issues/new) with the bug
  report template.
- Explain the behaviour you expected and the actual behaviour, with a screenshot
  if the problem is visual.
- Describe the steps to reproduce it, ideally as a small HTML page that shows
  the problem.
- Add the information you collected above.

Once it's filed, the maintainer labels it and tries to reproduce it. Without a
way to reproduce it, the issue is marked `pending: need repro` until there is
one. A reproduced bug is marked `🐛 needs fix`.

### Suggesting Enhancements

Enhancements, from new features to small improvements, are tracked as
[GitHub issues](https://github.com/phun-ky/speccer/issues).

Before suggesting one:

- Make sure that you are using the latest version, and read the
  [documentation](https://speccer.dev/guide/introduction/) to see if it's
  already possible.
- [Search](https://github.com/phun-ky/speccer/issues) for an existing
  suggestion, and add to it instead of opening a new one.
- Check that it fits the [roadmap](ROADMAP.md), including what is not planned.

A good suggestion has a clear title, describes the current behaviour and the
behaviour you'd like instead, and explains why it would be useful to most users.

### Contributing Code

Larger changes are best discussed in an issue first, so the work fits the
[roadmap](ROADMAP.md).

#### Architecture

speccer has no runtime dependencies. The source is in `src`:

- **`src/main.ts`** is the entry point. It exports `speccer()`, which renders
  every annotation on the page, one object per feature (`pin`, `grid`,
  `spacing`, `measure`, `mark`, `typography`, `a11y`) and `modes` for the
  activation modes. Its types are in `src/types`.
- **`src/features/*`** reads the `data-speccer` attribute of each annotated
  element and adds the annotations to `<body>`, positioned from the element's
  coordinates. Lines and curly brackets are drawn in the `#ph-speccer-svg`
  element on the page.
- **`src/config/browser.ts`** activates speccer from the attributes of its
  script tag (`data-dom`, `data-lazy`, `data-instant`, `data-manual`).
- **`src/utils`** holds the helpers the features share, such as coordinates,
  styles and the option parser in `get-options`.
- **`src/styles`** is the Stylus source of the CSS file.

The build writes `dist/`:

- **`rollup.config.js`** builds `dist/speccer.esm.js` (ES module),
  `dist/speccer.cjs` (CommonJS) and `dist/speccer.js` (UMD, for script tags and
  CDNs), and the types in `dist/speccer.d.ts` and `dist/speccer.d.cts`.
- **`npm run styles`** builds `dist/speccer.css` with Stylus and
  `dist/speccer.min.css` with PostCSS.
- **`scripts/check-pack.mjs`** checks that the packed package works from every
  entry point, and **`scripts/sbom.mjs`** writes the software bill of materials
  for each release; see [Releases](#releases).

The documentation site, [speccer.dev](https://speccer.dev), is built with
VitePress from `docs`. The API reference in `docs/api` is generated from the
source comments with TypeDoc.

#### Development

You need Node.js 24 and npm 11 to develop. The published package supports
Node.js `^22.13.0 || >=24.0.0`, which CI checks with `npm run check:pack`.

```shell-session
npm ci
npm run build
npm test
```

To work on the code in a browser, run these in two terminals:

```shell-session
npm run rollup:dev
npm run dev
```

`npm run rollup:dev` rebuilds `dist` on every change, and `npm run dev` serves
the test pages in `dev/` and reloads them when `dist` changes.

| Command                       | What it does                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `npm run build`               | Builds `dist`: the ES module, CommonJS and UMD builds, the types and the CSS           |
| `npm run rollup:dev`          | Builds the CSS once, then rebuilds the JavaScript on every change                      |
| `npm run dev`                 | Serves `dev/` with browser-sync and reloads it when `dist` changes                     |
| `npm test`                    | Runs the unit tests                                                                    |
| `npm run test:ci`             | Runs the unit tests with coverage, as CI does                                          |
| `npm run test:e2e`            | Builds, then runs the end-to-end tests in `tests/e2e` with Playwright                  |
| `npm run test:hooks`          | Tests the commit message hook in `.githooks/commit-msg`                                |
| `npm run style:lint`          | Lints every file, Markdown included, with ESLint and Prettier                          |
| `npm run style:format`        | Fixes what `style:lint` can fix                                                        |
| `npx tsc`                     | Type-checks the source and the tests                                                   |
| `npm run check:pack`          | Packs the package, installs it in an empty project and loads it from every entry point |
| `npm run check:bestpractices` | Checks the answers in `.bestpractices.json` against the repository                     |
| `npm run docs:check`          | Checks the API documentation comments with TypeDoc                                     |
| `npm run docs:gen`            | Generates the API reference into `docs/api`                                            |
| `npm run docs:dev`            | Generates the API reference, then serves speccer.dev locally                           |
| `npm run docs:build`          | Builds speccer.dev into `docs/.vitepress/dist`                                         |
| `npm run docs:preview`        | Serves the built site                                                                  |
| `npm run commit`              | Writes a Conventional Commits message with git-cz                                      |
| `npm run release:dry-run`     | Shows whether merging would release, and the planned version and changelog             |
| `npm run bestpractices:url`   | Prints bestpractices.dev links that propose the answers in `.bestpractices.json`       |

Run `npm run check:pack` and `npm run test:e2e` after `npm run build`; the
end-to-end tests need the Playwright browsers once, with
`npx playwright install`.

#### Coding Style

Code follows the project's [ESLint](https://eslint.org/) configuration
(`eslint-config-phun-ky`) and [Prettier](https://prettier.io/) formatting. A
contribution must pass `npm run style:lint`, `npx tsc` and `npm run docs:check`
with no errors. All of them run in CI on every pull request, and a pull request
that fails them can't be merged.

- **No runtime dependencies.** Write the helper in `src/utils` instead; see the
  [roadmap](ROADMAP.md#not-planned).
- **Document every export with a TSDoc comment.** It becomes the export's page
  in the API reference.

#### Tests

- **New functionality must come with tests.** Unit tests go next to the code in
  `__tests__` folders, run by `npm test` with Node's test runner and jsdom.
  Anything that depends on layout, scrolling or real rendering goes in an
  end-to-end test in `tests/e2e`, run in Chromium and Firefox.
- **Bug fixes must come with a regression test** that fails without the fix.
- **Packaging changes** are tested by `npm run check:pack`, which runs in CI.
- **Coverage must not drop.** `npm run test:ci` fails when the source falls
  below 82% of lines, 88% of functions or 85% of branches. The floor is raised
  as tests are added, towards 99% of lines, 100% of functions and 95% of
  branches. The line number is understated, because Node counts a file's leading
  comment as uncovered ([#520](https://github.com/phun-ky/speccer/issues/520)).
  CI uploads a coverage report for every pull request.

#### Developer Certificate of Origin

Every commit must be signed off under the
[Developer Certificate of Origin](https://developercertificate.org/) (DCO): a
statement that you wrote the change, or otherwise have the right to submit it
under the project's licence. You agree to it by adding a `Signed-off-by` line
with your name and email to the commit message:

```text
Signed-off-by: Your Name <you@example.com>
```

- **Per commit:** `git commit -s` adds the line for you.
- **Always:** `npm ci` sets `core.hooksPath` to `.githooks`, and the hook in
  `.githooks/prepare-commit-msg` adds the line to every commit, including those
  made by `npm run commit` or your editor.
- **Forgot?** Sign off every commit on your branch and push again:
  `git rebase --signoff main` then `git push --force-with-lease`.

The DCO check on every pull request fails if a commit isn't signed off.

#### Commits and Pull Requests

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/)
  (`feat:`, `fix:`, `docs:`, ...). `npm run commit` helps write them. Releases
  and the changelog are generated from them (see [Releases](#releases)), so pick
  the type that matches the change. A breaking change needs a `type!:` and a
  `BREAKING CHANGE:` footer that says what to change.
- Pull requests are merged with a merge commit, so every commit lands on `main`
  as it is. Split a change that mixes a fix with tooling into a `fix:` and a
  `chore:` commit.
- Commit messages must not carry AI attribution, such as a `Co-authored-by`
  trailer naming an AI tool. The `.githooks/commit-msg` hook rejects them
  locally, and CI checks every commit in the pull request.
- Deprecating an API isn't a breaking change, so it can land in any release.
  Mark it `@deprecated` with its replacement and the major it will be removed
  in. It keeps working through one full major: deprecated during 11.x or at
  12.0, it can be removed in 13.0 at the earliest.
- Don't commit a regenerated `docs/api`; each release regenerates it. Run
  `npm run docs:check` instead. Pages you write by hand in `docs` are welcome.
- Open a pull request against `main`. The CI workflow lints, type-checks, runs
  the unit and end-to-end tests, builds, packs, and checks and builds the docs;
  dependency review, CodeQL and the DCO check also run. All of them must pass.

#### Releases

The maintainer merges pull requests, and releases follow automatically from
GitHub Actions:

1. When a merged pull request changes what gets published, the publish workflow
   checks whether there is anything to release: a `feat`, `fix`, `perf` or
   `revert` commit, or a breaking change, that touches the published files.
   Other changes wait for the next release.
2. If so, it audits the runtime dependencies, then release-it picks the version
   from the commits, updates the changelog, builds and packs the package,
   regenerates `docs/api`, and publishes the package to npm with signed
   provenance.
3. The release commit and tag go to `main`, and a GitHub release is created with
   a software bill of materials attached.

speccer.dev is deployed from `main` after CI passes, whether or not there is a
release.

`npm run release:dry-run` shows what a merge would release.

## Attribution

This guide is based on
[contributing-gen](https://github.com/bttger/contributing-gen).
