import customConfig from '@phun-ky/eslint-config';
import { defineConfig } from 'eslint/config';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig([
  {
    extends: [customConfig]
  }
]);
