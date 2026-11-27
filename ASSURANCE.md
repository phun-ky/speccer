# Assurance Case

Why the [security expectations](SECURITY.md#security-expectations) of
`@phun-ky/speccer` hold, what they rest on, and where they don't hold yet. It is
kept short because the package is small: functions that read marked elements in
a page and add annotation elements to it, no runtime dependencies, and a build
and release pipeline.

## What is being protected

- **Users of the package and their pages:** speccer must add annotations and do
  nothing else: no network access, no storage, no markup or scripts run from
  values it reads in the page, and no changes outside its own annotation
  elements, the `#ph-speccer-svg` element and its listeners and observers.
- **The published package:** what users install from npm or load from a CDN must
  be exactly what this repository built, with nothing added on the way.
- **The repository and its release pipeline:** the source, the workflows, the
  docs site and the credentials that publish releases.

## Threat model

| Threat                                  | Where                                                                                               | How it is countered                                                                                                                                                                                                                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Script or markup injected from the page | `data-speccer-title`, `data-speccer-description`, pin symbols, typography and `autocomplete` values | Every value read from the page is escaped before it goes into an annotation with `innerHTML`, or set with `textContent`. Unit tests and an end-to-end test that loads markup and script payloads into every annotation check this. No `eval` or `new Function`                                 |
| A tampered or substituted release       | npm, CDNs                                                                                           | Releases are built and published only from GitHub Actions with npm trusted publishing (no long-lived npm token) and carry Sigstore-signed provenance, verifiable with `npm audit signatures`; each GitHub release has a CycloneDX SBOM                                                         |
| A malicious or vulnerable dependency    | Development dependencies, GitHub Actions                                                            | No runtime dependencies; `npm audit` blocks releases on high or critical runtime advisories; dependency review blocks pull requests; Dependabot proposes updates weekly, after a 14-day cooldown; Actions are pinned to commit SHAs                                                            |
| A malicious change to the source        | Pull requests                                                                                       | Pull requests only, with required checks (lint, types, tests, the build, packaging, the docs, dependency review, CodeQL, the DCO) on `main`; no force pushes or deletion of `main`                                                                                                             |
| Abuse of CI credentials                 | Workflows                                                                                           | Read-only default permissions in every workflow, write only per job; pull requests from forks get no secrets; the labeler runs on `pull_request_target` but never checks out or runs pull request code; no untrusted value is interpolated into a script; secret scanning with push protection |
| Unexpected input                        | Callers of the exported functions, `data-speccer` attributes                                        | Every exported function that takes an element throws a `TypeError` for anything else. The words in a `data-speccer` attribute are only compared with fixed lists, so an unknown word changes nothing                                                                                           |

## Trust boundaries

1. **Page to speccer:** the marked elements, their attributes and computed
   styles come from the page, which may contain user content. speccer reads
   them, escapes every value it shows, and writes only its own annotation
   elements and lines.
2. **Caller to speccer:** the elements and options come from the application.
   Elements are checked, and options are merged into a new object, never
   deep-merged or assigned by path.
3. **Repository to npm:** only the publish workflow, after a merge to `main` and
   the release guard, can publish, through npm trusted publishing.
4. **npm or CDN to the user:** the user's package manager or browser fetches the
   package; provenance and the npm registry's integrity hashes link it to this
   repository and build.

## Secure design principles

- **Economy of mechanism:** one function per feature, with shared helpers in
  `src/utils`.
- **Fail-safe defaults:** a target that isn't an element throws before anything
  is added; unknown words in `data-speccer` are ignored instead of guessed at.
- **Least privilege:** the package touches only its own annotations, the
  `#ph-speccer-svg` element, a `resize` listener and, in lazy mode,
  `IntersectionObserver`s; CI tokens are read-only by default and write only
  where a job needs it.
- **Open design:** everything is public, including the release pipeline and this
  document.
- **No dynamic code:** no `eval`, `new Function` or loading of code.
- **Minimal dependencies:** no runtime dependencies at all.

## Common weaknesses countered

| Weakness                                           | Status                                                                                                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| CWE-79 cross-site scripting                        | Values read from the page are escaped before they are inserted, and tested with payloads in two browsers |
| CWE-94 code injection                              | No dynamic code anywhere in the package                                                                  |
| CWE-1321 prototype pollution                       | Options are merged with object spread into a new object, never deep-merged or assigned by path           |
| CWE-829 inclusion from an untrusted control sphere | No runtime dependencies, provenance on releases, Actions pinned to SHAs                                  |
| CWE-494 download of code without integrity check   | npm verifies integrity hashes; releases carry signed provenance                                          |

## Known gaps

- **speccer is not a sanitiser:** it runs with the page's privileges and doesn't
  check the page it annotates; see the
  [security expectations](SECURITY.md#security-expectations).
- **Options are not fully checked yet:** only elements are; checks on every
  export with `TypeError` and `RangeError` are planned for 12.0, see the
  [roadmap](ROADMAP.md#120).
- **Assistive technology:** annotations are ordinary elements in the page, not
  hidden from assistive technology, so a screen reader reads them with the page.
- **One maintainer:** pull requests by the maintainer get no second review, and
  access to the repository and the package rests on one person; see
  [governance](GOVERNANCE.md#continuity).
- **Tags are not signed;** releases are verified through npm provenance instead.
- **Releases before 11.3.19 have no provenance,** only npm's registry
  signatures, and releases before 11.4.6 have no SBOM attached.
