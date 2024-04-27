module.exports = {
  preset: 'ts-jest/presets/js-with-ts',  // Only if you still need to use ts-jest for some TypeScript features
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',  // Use SWC to transform files
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  }
};