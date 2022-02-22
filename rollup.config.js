import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'speccer',
      file: './speccer.js',
      format: 'umd',
      exports: 'named',
      assetFileNames: '[name][extname]',
      globals: {
        '@babel/runtime/regenerator': 'regeneratorRuntime',
        '@babel/runtime/helpers/asyncToGenerator': 'asyncToGenerator'
      }
    },

    plugins: [
      nodeResolve({
        isRequire: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelHelpers: 'runtime',
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              regenerator: true,
              helpers: true
            }
          ],
          '@babel/transform-regenerator',
          '@babel/transform-async-to-generator'
        ],
        exclude: ['node_modules/**']
      }),
      terser()
    ]
  }
];
