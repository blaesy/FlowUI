module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      ".(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  };