/* eslint-disable import/no-unused-modules */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    typecheck: {
      tsconfig: './tsconfig.test.json'
    },
    environment: 'jsdom',
    include: ['src/**/__tests__/**/*.[jt]s'],
    coverage: {
      reporter: ['text', 'cobertura']
    },
    setupFiles: ['./src/tests/setupFiles.ts'],
    outputFile: 'reports/coverage/sonar-report.xml'
  }
});
