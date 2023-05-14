module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-actions', '@storybook/addon-viewport', {
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
      transcludeMarkdown: true
    }
  }, '@storybook/addon-controls', '@storybook/addon-backgrounds', '@storybook/addon-toolbars', '@storybook/addon-measure', '@storybook/addon-outline', 'storybook-addon-react-router-v6'],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  "typescript": {
    "reactDocgen": "react-docgen-typescript-plugin"
  },
  docs: {
    autodocs: true
  }
};