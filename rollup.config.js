import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import typescript from 'typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'speccer',
      file: './speccer.js',
      format: 'umd',
      sourcemap: true,
      exports: 'named',
      assetFileNames: '[name][extname]'
    },
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
    input: './dts/index.d.ts',
    output: [{ file: './index.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
