module.exports = {
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
}
