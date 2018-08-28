module.exports = {
  plugins: [
    require('cssnano')({
      autoprefixer: { add: true },
      discardComments: { removeAll: true },
      discardDuplicates: true,
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
