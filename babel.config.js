module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@access': './src/access',
          '@constant': './src/constant',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@sagas': './src/sagas',
          '@screens': './src/screens',
          '@app': './src',
          '*': './*',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
