module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        //'^.+\\.(ts|tsx)$': 'ts-jest', // Esto se usa para TypeScript
    },
}