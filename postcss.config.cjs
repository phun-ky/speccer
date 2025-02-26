/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('cssnano')({
      autoprefixer: { add: true },
      discardComments: { removeAll: true },
      discardDuplicates: true,
      normalizeWhitespace: true,
      discardEmpty: true,
      discardOverridden: true,
      discardUnused: true,
      reduceIdents: false,
      reduceInitial: false,
      reduceTransforms: false,
      zindex: false
    })
  ]
};

module.exports = config;
