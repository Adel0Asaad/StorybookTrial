const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const {generate} = require('@storybook/react-native/scripts/generate');

// generate({
//   configPath: path.resolve(__dirname, './.storybook'),
// });
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {fastRefresh: true},
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
