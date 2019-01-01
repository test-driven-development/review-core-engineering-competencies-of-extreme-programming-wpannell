// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  cacheDirectory: './.jest-cache',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov'],
  globals: {
    "ts-jest": {
      'tsConfigFile': '<rootDir>/src/tsconfig.spec.json',
      'skipBabel': true
    },
    "\_\_TRANSFORM_HTML\_\_": true
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1',
  },
  modulePaths: ['<rootDir>/src/'],
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)'],
  testURL: 'http://localstorage:8080',
  transform: {
    '^.+\\.(ts|js|html)x?$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
};
