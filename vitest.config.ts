/* eslint-disable import/no-unused-modules */
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    typecheck: {
      tsconfig: './tsconfig.test.json'
    },
    environment: 'jsdom',
    include: ['src/**/__tests__/**/*.[jt]s'],
    coverage: {
      reporter: ['text', 'cobertura'],
      exclude: [
        ...(configDefaults.coverage.exclude as string[]),
        'src/main.ts',
        'src/types',
        'src/types/**'
      ]
    },
    setupFiles: ['./src/tests/setupFiles.ts'],
    outputFile: 'reports/coverage/sonar-report.xml'
  }
});
