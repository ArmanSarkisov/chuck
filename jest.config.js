const config = require('jest-config');
// import { defaults } from 'jest-config';

module.exports = {
  moduleFileExtensions: [...config.defaults.moduleFileExtensions, 'js', 'jsx'],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx)'],
  testMatch: ['<rootDir>/src/**/*.spec.(js|jsx)|<rootDir>/tests/*.(js|jsx)'],
  moduleNameMapper: {
    '\\.svg': '@svgr/webpack',
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
  },
};
