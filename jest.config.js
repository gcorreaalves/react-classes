module.exports = {
  // collectCoverage: false,
  // cacheDirectory: './node_modules/.cache',
  // collectCoverageFrom: ['src/**/{actions,reducer}.{js,jsx}', '!**/node_modules/**'],
  // notify: false,
  setupFiles: ['./jestsetup.js'],
  snapshotSerializers: [
    './node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
