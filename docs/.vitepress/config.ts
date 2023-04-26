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
            text: 'Classes',
            collapsed: true,
            items: [{ text: 'BeltSystem', link: '/api/classes/belt-system' }]
          },
          {
            text: 'Enums',
            collapsed: true,
            items: [
              { text: 'Enum 1', link: '/api/enums/enum1' },
              { text: 'Enum 2', link: '/api/enums/enum2' },
              { text: 'Enum 3', link: '/api/enums/enum3' }
            ]
          },
          {
            text: 'Functions',
            collapsed: true,
            items: [
              { text: 'Function 1', link: '/api/functions/function1' },
              { text: 'Function 2', link: '/api/functions/function2' },
              { text: 'Function 3', link: '/api/functions/function3' }
            ]
          },
          {
            text: 'Interfaces',
            collapsed: true,
            items: [
              { text: 'Interface 1', link: '/api/interfaces/interface1' },
              { text: 'Interface 2', link: '/api/interfaces/interface2' },
              { text: 'Interface 3', link: '/api/interfaces/interface3' }
            ]
          }
        ]
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
