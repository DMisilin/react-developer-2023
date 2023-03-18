module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**',
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/test/**',
    ],
    coverageDirectory: '<rootDir>/src/test/coverage',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', 'src'],
    testTimeout: 20000,
    roots: ['./src'],
};