/* eslint-disable import/no-unused-modules */
const config = {
  preset: 'ts-jest',
  displayName: 'speccer',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js)$': ['esbuild-jest']
  },
  projects: [
    {
      displayName: 'speccer/utils',
      testMatch: ['<rootDir>/src/utils/__tests__/**/*.[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.(ts|js)$': ['esbuild-jest']
      }
    }
  ],
  collectCoverage: true,
  coverageReporters: ['text', 'cobertura']
};

export default config;
