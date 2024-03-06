// import { StorybookConfig } from '@storybook/react-native';

// const main: StorybookConfig = {
//   stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
//   addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
// };

// export default main;

// Import types from @storybook/react-native
import {StorybookConfig} from '@storybook/react-native';

const config = {
  // Specify where to find stories
  stories: ['./stories/**/*.stories.@(ts|tsx|js|jsx)'],

  // Register addons you're using
  addons: [
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-server',
    '@storybook/addon-webpack5-compiler-babel'
  ],

  // reactNativeServerOptions (optional): Configuration options for the server
  reactNativeServerOptions: {
    host: 'localhost', // Host for the server
    port: 7007, // Port for the server
  },

  // Optionally, configure Webpack if you have web-specific customizations
  webpackFinal: async config => {
    // Custom Webpack modifications go here
    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;
