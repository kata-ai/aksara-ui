module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.story.{ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/stories/**/*.{ts,tsx}',
    '!src/utils/storybook/**/*.{ts,tsx}',
    '!src/index.{ts,tsx}',
  ],
  coverageReporters: ['json', 'lcov'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['lib', 'lib-es6'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
};
