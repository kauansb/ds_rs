import type { Preview } from '@storybook/web-components'
import  docTemplate  from './docTemplate.mdx';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      page: docTemplate,
      inlineStories: true,
      iframeHeight: '60px',
    },
  },
};

export default preview;