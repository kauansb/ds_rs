import type { StorybookConfig } from '@storybook/web-components-vite';


const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    '@storybook/addon-storysource',
    //'@storybook/addon-links',   // Addon para links entre estórias
    //'@storybook/addon-interactions',   // Addon para testar interações
  ],
  "framework": {
    "name": "@storybook/web-components-vite",
    "options": {}
  },
  docs: {
    autodocs: true, // Habilita a geração automática de docs
    defaultName: "Documentation",
  },
};
export default config;