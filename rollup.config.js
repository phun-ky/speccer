/* eslint-disable import/no-unused-modules */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

export default [
  {
    input: 'src/main.ts',
    output: [{
      name: 'speccer',
      file: './dist/speccer.js',
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      assetFileNames: '[name][extname]'
    },{
      name: 'speccer',
      file: './dist/speccer.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      assetFileNames: '[name][extname]'
    }],
    plugins: [
      nodeResolve(),
      ts({
        useTsconfigDeclarationDir: true,
        sourceMap: false,
        typescript
      }),
      terser()
    ]
  },
  {
    input: './dts/main.d.ts',
    output: [{ file: './dist/speccer.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
