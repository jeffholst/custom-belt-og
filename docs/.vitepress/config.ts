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
    nav: [{ text: 'Documentation', link: 'documentation' }],

    sidebar: [
      {
        text: 'Overview',
        link: '/'
      },
      {
        text: 'Demo',
        link: '/demo'
      },
      {
        text: 'Documentation',
        link: '/documentation',
        items: [
          { text: 'Ex 1', link: '/' },
          { text: 'Ex 2', link: '/' },
          { text: 'Ex 3', link: '/' }
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
