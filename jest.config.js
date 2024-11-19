module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',  // To handle .ts files
    },
    rootDir: './',  // Root directory for Jest (default is the directory where this config is located)
  };
  