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
      { text: 'Documentation', link: '/what-is-custom-belt' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is Custom Belt', link: '/what-is-custom-belt' },
              { text: 'Quick Start', link: '/quick-start' }
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Examples', link: '/examples' },
              { text: 'API', link: '/api' },
              { text: 'Belt System', link: '/belt-system' }
            ]
          }
        ]
      },
      {
        text: `version ${version}`
      }
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
