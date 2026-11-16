# Security Policy

`@phun-ky/speccer` has no runtime dependencies: the published package is its own
code and nothing else. Its development tools (the build, tests, lint and the
docs site) do have dependencies; how they are chosen, tracked and kept clear of
known vulnerabilities is described under [Dependencies](#dependencies).

## Supported Versions

Support follows the major version:

| Release                   | Supported |
| ------------------------- | --------- |
| `11.x`, the current major | ✅        |
| `10.x` and older          | ❌        |

- **The current major is supported as a whole.** Fixes are released as a new
  patch or minor of it, and upgrading within a major never breaks your code.
- **The previous major gets fixes for high and critical vulnerabilities for 6
  months** after the next major is released, as a patch on its latest release.
  11.0.0 was released on 2024-08-28, so `10.x` is past that window.
- **Security comes before the deprecation grace period.** If a vulnerability
  can't be fixed without breaking an API, the fix may change or remove it in a
  patch or minor release instead of waiting for a major. The change is kept as
  small as possible, and the advisory and the release notes say what changed and
  why.

To get a fix, upgrade to the newest release of your major.

## Reporting a Vulnerability

Report vulnerabilities privately, either with GitHub's
[private vulnerability reporting](https://github.com/phun-ky/speccer/security/advisories/new)
or by email to <security@phun-ky.net>. Please don't open a public issue for a
security problem.

## How Reports Are Handled

1. **Acknowledgement:** you'll get a reply within 7 days confirming the report
   was received.
2. **Assessment:** the maintainer reproduces the issue and judges its severity,
   and may ask you for details.
3. **Fix:** a fix is developed in a private GitHub security advisory and
   released as a new version. The aim is a fix within 30 days for serious
   issues.
4. **Disclosure:** the advisory is published when the fix is released, with a
   CVE where one applies. Please keep the issue private until then.
5. **Credit:** reporters are credited in the advisory and the release notes,
   unless they ask to stay anonymous.

## Security Expectations

speccer runs in the browser, inside the page that loads it, with that page's
privileges. It reads the elements marked with `data-speccer` attributes, their
attributes and their computed styles, and adds annotation elements to the
document.

What you can rely on:

- **No network, storage or data collection.** speccer makes no requests and
  reads or writes no cookies, `localStorage` or `sessionStorage`. Everything it
  does stays in the page.
- **No dynamic code.** No `eval`, `new Function` or loading of code.
- **Values from the page are inserted as text.** Since 11.4.2, the pin title and
  description (`data-speccer-title`, `data-speccer-description`), the
  `autocomplete` value shown by the accessibility feature and the typography
  values are escaped before they are added to an annotation, so markup in them
  is shown, not rendered or run. Unit tests and an end-to-end test
  (`tests/e2e/untrusted-content.e2e.ts`) check this.
- **What it changes in the page.** It appends annotation elements (with the
  `ph-speccer` class) to `document.body`, draws lines in the `#ph-speccer-svg`
  element when the page provides one, adds a `resize` listener on `window`, and,
  in lazy mode, `IntersectionObserver`s for the marked elements. The UMD build
  defines the global `window.speccer` only when loaded with a script tag that
  has the `data-manual` attribute.
- **Releases are traceable.** Every release is built and published from GitHub
  Actions, with signed provenance (see below).

What you can't rely on:

- **speccer is a documentation tool, not a sanitiser.** It doesn't check or
  clean the page it annotates, and it has the same access to the page as any
  other script on it. Load it on documentation, design system and review pages,
  not on pages where it isn't needed.
- **Annotation ids are not secret.** The ids that link elements to their
  annotations come from `Math.random()`, which is fine for that purpose and for
  nothing security-related.

## Verifying Releases

Every release is published from GitHub Actions with npm trusted publishing, and
carries a signed provenance attestation (Sigstore) that links it to the commit
and workflow run that built it. To verify the package you've installed:

```shell
npm audit signatures
```

The provenance must name the repository `phun-ky/speccer` and the workflow
`.github/workflows/publish.yml`. The package's page on npm shows this under
"Provenance", and `npm view @phun-ky/speccer@<version> dist.attestations` lists
the attestations.

Each GitHub release also has a software bill of materials attached, in CycloneDX
format (`speccer-<version>.cdx.json`), listing the runtime dependencies (none)
and any package a build includes.

## Dependencies

**Choosing them.** speccer has no runtime dependencies, and a new one is
discussed in an issue first. A runtime dependency would be declared in
`dependencies` and kept external in the ES module and CommonJS builds, never
bundled into them; only the UMD build for script tags and CDNs, which can't
resolve dependencies, may include them. `npm run check:pack` fails a build that
breaks this rule. A dependency must be widely used, actively maintained and
under an OSI-approved licence compatible with MIT; strong copyleft licences
(GPL, AGPL) are not accepted. Development dependencies follow the same rules,
judged more loosely.

**Obtaining them.** Packages come only from the npm registry, with exact
versions locked in `package-lock.json` and installed with `npm ci` in CI. GitHub
Actions are pinned to commit SHAs.

**Tracking them.** Dependabot proposes version updates weekly and security
updates as soon as an advisory is published. Every pull request runs
[dependency review](https://github.com/phun-ky/speccer/blob/main/.github/workflows/dependency-review.yml),
and every release runs `npm audit` on runtime dependencies first.

**Fixing known vulnerabilities.** Findings are checked against the GitHub
Advisory Database:

| Finding                    | Where                             | What happens                                                                                     |
| -------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| Critical or high           | Runtime or bundled dependency     | Blocks merging (dependency review) and releasing (`npm audit`); fixed and released within 7 days |
| Critical or high           | Development dependency            | Blocks merging when introduced; an existing one is fixed within 30 days                          |
| Moderate or low            | Any dependency                    | Fixed with the next update, within 90 days                                                       |
| Licence outside the policy | New runtime or bundled dependency | Not merged                                                                                       |

**Accepted exceptions.** A vulnerability that can't be fixed yet and can't be
exploited through this project is listed here, and removed as soon as a fix is
reachable:

| Advisory                                                                       | Package           | Why it is accepted                                                                                                                                                                                                                | Remove when                                            |
| ------------------------------------------------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4) (low) | `deepmerge` 4.3.1 | Development only, through `@rollup/plugin-node-resolve`, which calls it once, at load time, to copy its own default options into an empty object. No input from this project or from outside reaches it. No fixed version exists. | A fixed `deepmerge`, or a plugin release that drops it |

## Code Scanning

CodeQL analyses every pull request and every push to `main`. The ruleset on
`main` blocks merging while CodeQL reports an error, or a security alert of high
or critical severity. Other CodeQL alerts are fixed within 90 days, or dismissed
with the reason when they are false positives. OpenSSF Scorecard runs on every
push to `main`, with results at
<https://scorecard.dev/viewer/?uri=github.com/phun-ky/speccer>.

## Secrets

The project keeps as few secrets as possible:

| Secret          | Used by       | For                                                   |
| --------------- | ------------- | ----------------------------------------------------- |
| `GH_TOKEN`      | `publish.yml` | Pushing release commits and tags, and GitHub releases |
| `CODECOV_TOKEN` | `ci.yml`      | Uploading coverage reports                            |

Publishing to npm needs no secret: it uses short-lived OIDC tokens from GitHub.

- **Storage:** secrets are kept only as encrypted GitHub Actions secrets, never
  in the repository. Secret scanning with push protection blocks commits that
  contain one.
- **Access:** only the maintainer can view or change them, and they are not
  available to workflows run from forks.
- **Rotation:** at least once a year, and immediately if one may have been
  exposed.
