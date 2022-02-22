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
      assetFileNames: '[name][extname]'
    },

    plugins: [
      nodeResolve({
        isRequire: true
      }),
      commonjs({
        include: 'node_modules/**'
      }),
      terser()
    ]
  }
];
