import { defineConfig } from 'eslint/config';
import customConfig from 'eslint-config-phun-ky';

export default defineConfig([
  {
    // Generated files
    ignores: [
      'CHANGELOG.md',
      'docs/api/**',
      'docs/.vitepress/cache/**',
      'docs/.vitepress/dist/**',
      'playwright-report/**',
      'test-results/**'
    ]
  },
  {
    extends: [customConfig]
  },
  {
    // VitePress syntax: [[toc]] and GitHub-style alerts
    files: ['docs/**/*.md'],
    rules: {
      'markdown/no-missing-label-refs': [
        'error',
        {
          allowLabels: [
            'toc',
            '!NOTE',
            '!TIP',
            '!IMPORTANT',
            '!WARNING',
            '!CAUTION'
          ]
        }
      ]
    }
  },
  {
    // Virtual modules provided by VitePress plugins
    files: ['docs/.vitepress/**/*.ts'],
    rules: {
      'import-x/no-unresolved': ['error', { ignore: ['^virtual:'] }]
    }
  }
]);
