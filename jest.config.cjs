module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        //'^.+\\.(ts|tsx)$': 'ts-jest', // Esto se usa para TypeScript
    },
}