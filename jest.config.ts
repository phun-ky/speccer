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
      testMatch: ['<rootDir>/**/utils/__tests__/**/*.[jt]s?(x)'],
      preset: 'ts-jest',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.(ts|js)$': ['esbuild-jest']
      }
    }
  ]
};

export default config;
