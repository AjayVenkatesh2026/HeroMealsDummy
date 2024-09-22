// TODO: add react-native-paper/babel plugin

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
      },
    ],
  ],
};
