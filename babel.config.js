module.exports = {
  presets: ['module:@react-native/babel-preset'],
  addons: [
    /*existing addons,*/ {
      name: '@storybook/addon-react-native-web',
      options: {babelPlugins: ['babel-plugin-name']},
    },
  ],
};
