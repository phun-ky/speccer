import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import customConfig from 'eslint-config-phun-ky';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig([
  {
    extends: [customConfig]
  },
  {
    files: ['**/*.md'],
    processor: markdown.processors.markdown,
    rules: {
      'no-irregular-whitespace': 'off',
      '@stylistic/indent': 'off'
    }
  }
]);
