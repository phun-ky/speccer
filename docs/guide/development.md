# Development

::: info

Want to contribute? Please read the
[CONTRIBUTING.md](https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md)
and
[CODE_OF_CONDUCT.md](https://github.com/phun-ky/speccer/blob/main/CODE_OF_CONDUCT.md).

:::

To develop **SPECCER**, fork it, and then in the project root:

```shell
npm i
npm run dev
```

This will open up the local development server. In a new bash window:

```shell
npm run rollup:dev
```

To build the code.

The relevant `html` files exists under `/dev` from the project root.

To test the code:

```shell
npm test
```

## Commit

To commit, we use
[semantic git commits with Commitizen](https://github.com/streamich/git-cz). So
please run this when you are ready to commit your staged files:

```shell
npm run commit
```

When you are done with your development, create a PR with the original
repository :)

## Clean code

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and
[Putout](https://github.com/coderaiser/putout) is used:

```shell
// to check for code issues
npm run style:code
// to format code with ESLint and Prettier
npm run style:format
// to lint code with ESLint and Prettier
npm run style:lint
```
