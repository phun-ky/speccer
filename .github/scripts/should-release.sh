#!/usr/bin/env bash
# Decides whether there is anything to release since the last release tag.
#
# @release-it/conventional-changelog looks at every commit since the last tag,
# so a feat/fix that only touches CI or tooling would still publish a version.
# Here only commits that touch published files count, and only feat/fix/perf/
# revert or breaking changes trigger a release. The version increment itself is
# left to @release-it/conventional-changelog.
#
# Prints the decision and, in GitHub Actions, writes release=true|false to
# $GITHUB_OUTPUT.
set -euo pipefail

# Sources and build config that end up in dist/, plus the other files in the
# tarball. Unit tests live next to the source but are not published.
published_files=(
  src
  ':(exclude)src/**/__tests__/**'
  package.json
  README.md
  LICENSE
  rollup.config.js
  tsconfig.build.json
  postcss.config.cjs
  .browserslistrc
)

decide() {
  echo "$2"
  if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    echo "release=$1" >> "$GITHUB_OUTPUT"
  fi
  exit 0
}

if [[ "$(git rev-parse --is-shallow-repository)" == "true" ]]; then
  echo "error: shallow clone, cannot find the last release tag." >&2
  echo "Check out with fetch-depth: 0." >&2
  exit 1
fi

last_tag=$(git describe --tags --abbrev=0 \
  --match 'v[0-9]*.[0-9]*.[0-9]*' HEAD 2> /dev/null || true)

if [[ -z "$last_tag" ]]; then
  decide true "Release: no release tag found, this is the first release."
fi

echo "Commits since $last_tag touching published files:"

release=false

while read -r sha; do
  [[ -z "$sha" ]] && continue

  subject=$(git log -1 --format=%s "$sha")
  body=$(git log -1 --format=%b "$sha")
  reason=""

  if [[ "$subject" =~ ^[A-Za-z]+(\([^\)]*\))?!: ]] ||
    grep -qE '^BREAKING[ -]CHANGE:' <<< "$body"; then
    reason="breaking"
  elif [[ "$subject" =~ ^(feat|fix|perf|revert)(\([^\)]*\))?: ]] ||
    [[ "$subject" =~ ^Revert\ \" ]]; then
    reason="releasable"
  fi

  echo "  ${sha:0:7} ${subject}${reason:+  <- $reason}"
  [[ -n "$reason" ]] && release=true
done < <(git log --no-merges --format=%H "$last_tag..HEAD" -- "${published_files[@]}")

if [[ "$release" == "true" ]]; then
  decide true "Release: found feat/fix/perf/revert or breaking changes."
fi

decide false "Skipping release: no feat/fix/perf/revert or breaking changes to published files since $last_tag."
