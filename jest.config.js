module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: false,
    collectCoverageFrom: ['src/**.{ts,tsx}', 'src/**/**.{ts,tsx}'],
    // coverageReporters: ['text'],
    // // coverageDirectory: 'coverage',
    // globals: {
    //   'ts-jest': {
    //     tsConfig: 'tsconfig.json',
    //   },
    // },
    moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
    // moduleNameMapper: {
    //   '@src(.*)$': '<rootDir>/src$1',
    // },
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/test/**/*.test.(ts|js|tsx)'],
    testEnvironment: 'node',

  };
