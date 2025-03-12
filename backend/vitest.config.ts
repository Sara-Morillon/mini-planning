import { loadEnvFile } from 'node:process'
import { defineConfig } from 'vitest/config'

loadEnvFile('tests/.env.test')

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    exclude: ['dist'],
    coverage: {
      exclude: ['mocks'],
    },
  },
})
