const config = require('jest-config');

module.exports = {
  moduleFileExtensions: [...config.defaults.moduleFileExtensions, 'js', 'jsx'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx)'],
  testMatch: ['<rootDir>/src/**/*.spec.(js|jsx)|<rootDir>/tests/*.(js|jsx)'],
  moduleNameMapper: {
    '^@/(.*svg)(\\?component)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  resetMocks: true,
};
