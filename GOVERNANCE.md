# Governance

speccer is a small open source project with a single maintainer. This document
describes how decisions are made, who does what, and what happens if the
maintainer can't continue.

## Model

The project follows a **maintainer-led** model: the maintainer makes the final
decision on what goes into the project, guided by the [roadmap](ROADMAP.md) and
the discussion with contributors.

Decisions are made in public:

- **Proposals** are made as
  [GitHub issues](https://github.com/phun-ky/speccer/issues). Larger changes,
  such as breaking changes, are discussed in an issue before work starts.
- **Changes** are made as pull requests, reviewed by the maintainer, and merged
  only when the required checks pass.
- **Disagreements** are resolved by discussion in the issue or pull request. If
  that doesn't settle it, the maintainer decides and explains why.
- **Conduct** is governed by the [Code of Conduct](CODE_OF_CONDUCT.md), which
  the maintainer enforces.

### Reviews

With one maintainer, a pull request by the maintainer has no second reviewer.
The rules on `main` therefore require pull requests, resolved review threads and
passing checks (tests, lint, packaging, dependency review, CodeQL and the DCO),
but no approving review, and the maintainer can bypass them so that releases can
push their commit and tag. Once there is a second maintainer, pull requests need
an approving review from a maintainer other than the author.

## Roles

| Role            | Who                                                                        | Responsibilities                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maintainer**  | Alexander Vassbotn Røyne-Helgesen ([@phun-ky](https://github.com/phun-ky)) | Sets the direction and roadmap; triages issues; reviews and merges pull requests; makes releases; handles security reports; enforces the Code of Conduct; manages the repository and the npm package |
| **Contributor** | Anyone who opens an issue or a pull request                                | Follows the [contributing guide](CONTRIBUTING.md) and the Code of Conduct; includes tests with code changes                                                                                          |

### Becoming a maintainer

Contributors who have made sustained, high-quality contributions may be invited
to become maintainers. A new maintainer gets write access to the repository and
is added to this document, and from then on the project needs a review from a
maintainer other than the author before merging.

Before anyone is given write access or any other escalated permission, such as
publishing rights on npm, the maintainer reviews their contribution history and
confirms that their GitHub account uses two-factor authentication. They get the
lowest role that lets them do the work, and the change is recorded in the roles
table above.

## Continuity

Today, one person holds everything needed to run the project: admin access to
the [GitHub repository](https://github.com/phun-ky/speccer), ownership of the
[`@phun-ky/speccer` package](https://www.npmjs.com/package/@phun-ky/speccer) on
npm, and the [speccer.dev](https://speccer.dev) domain.

- **Releases** are published from GitHub Actions with npm trusted publishing, so
  publishing needs no personal npm token, only access to the repository and the
  package.
- **The docs site** is built and deployed to GitHub Pages from the repository,
  so it needs no other hosting account; only the domain is held separately.
- **The code** is MIT-licensed. Anyone can fork it and continue the work under a
  new name if the project stops.
- **A second person with access** doesn't exist yet. Until there is one, the
  project can't continue under its own name if the maintainer is unavailable.
