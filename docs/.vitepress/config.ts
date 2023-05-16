import { defineConfig } from 'vitepress';
import { version } from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: `Custom Belt`,
  base: '/custom-belt/',
  description: 'Custom Belt demo and documentation',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Demo', link: '/demo' },
      { text: 'Documentation', link: '/introduction/what-is-custom-belt' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Custom Belt?', link: '/introduction/what-is-custom-belt' },
          { text: 'Quick Start', link: '/introduction/quick-start' },
          { text: 'Examples', link: '/introduction/examples' }
        ]
      },
      {
        text: 'API',
        items: [
          {
            text: 'Belt',
            link: '/api/modules/belt'
          },
          {
            text: 'BeltSystem',
            link: '/api/modules/BeltSystem'
          }
        ]
      },
      { text: `Version: ${version}` }
    ],
    search: {
      provider: 'local'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jeffholst/custom-belt' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Jeff Holst'
    },

    editLink: {
      pattern: 'https://github.com/jeffholst/custom-belt/edit/main/docs/:path'
    }
  }
});
