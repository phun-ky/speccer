# Roadmap

What speccer intends to do, and not do, from November 2026 to November 2027.
It's a plan, not a promise: priorities can change, and changes to this file are
made in pull requests like any other. Individual pieces of work are tracked as
[GitHub issues](https://github.com/phun-ky/speccer/issues), grouped in
[milestones](https://github.com/phun-ky/speccer/milestones).

## Planned

### 12.0

Breaking changes collect in the next major, and land together with release notes
and an upgrading guide
([API review, #509](https://github.com/phun-ky/speccer/issues/509)):

- **A function that removes every annotation and stops speccer**, for single
  page apps and component previews
  ([#485](https://github.com/phun-ky/speccer/issues/485)).
- **Strict TypeScript** ([#491](https://github.com/phun-ky/speccer/issues/491)).
- **Input checks on every export**, with `TypeError` and `RangeError` for bad
  input, from the API review.
- **Fixes that change where or whether annotations render**: text pins
  ([#488](https://github.com/phun-ky/speccer/issues/488),
  [#489](https://github.com/phun-ky/speccer/issues/489)), typography
  ([#490](https://github.com/phun-ky/speccer/issues/490)) and accessibility
  annotations with lazy loading
  ([#480](https://github.com/phun-ky/speccer/issues/480)).

Until then, 11.x gets no breaking changes; see the
[security policy](SECURITY.md#supported-versions) for how long each major is
supported.

### Documentation

- **Framework guides**: a React guide that cleans up after itself
  ([#486](https://github.com/phun-ky/speccer/issues/486)), and guides for Vue,
  Svelte and Angular ([#492](https://github.com/phun-ky/speccer/issues/492)).
- **An up-to-date Storybook tutorial**
  ([#493](https://github.com/phun-ky/speccer/issues/493)).
- **A troubleshooting page**
  ([#494](https://github.com/phun-ky/speccer/issues/494)).
- **Every example on speccer.dev run against the packed package**
  ([#506](https://github.com/phun-ky/speccer/issues/506)).

### Project health

- **OpenSSF Best Practices:** the passing badge, then silver.
- **TypeScript 7**, once the tools the build, docs and lint depend on support it
  ([#538](https://github.com/phun-ky/speccer/issues/538)).
- **A second maintainer**, so that pull requests get a review from someone other
  than the author and access to the project doesn't rest on one person; see
  [governance](GOVERNANCE.md#continuity).

## Not planned

- **Runtime dependencies.** speccer has none, and keeps it that way: the helpers
  it needs live in `src/utils`.
- **Collecting data.** speccer doesn't collect, store or send data anywhere; it
  only reads the page it runs on and adds elements to it.
