import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  bail: true,
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
  },
}

export default config
