module.exports = {
  stories: [
    '../client/**/*.stories.mdx',
    '../client/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
  framework: '@storybook/react',
};
