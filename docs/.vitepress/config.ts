/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from 'vitepress';
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons';
import pkg from '../../package.json' with { type: 'json' };
import typedocSidebar from '../api/typedoc-sidebar.json';

import darkTheme from './shiki/accessible-aa-dark-shiki.json' with { type: 'json' };
import lightTheme from './shiki/accessible-aa-light-shiki.json' with { type: 'json' };
import { fileURLToPath } from 'node:url';

export default defineConfig({
  lang: 'en-GB',
  head: [
    [
      'meta',
      { property: 'og:url', content: 'https://phun-ky.net/projects/speccer' }
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'SPECCER - A tool to annotate or highlight elements'
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'SPECCER was originally created to simplify documenting components in a design system, but it can be used to annotate or highlight any HTML element on a webpage. If you need to draw attention to elements, SPECCER is your tool!'
      }
    ],
    [
      'meta',
      {
        property: 'og:site_name',
        content: 'SPECCER - A tool to annotate or highlight elements'
      }
    ],
    ['meta', { property: 'og:locale:locale', content: 'en_GB' }],
    [
      'meta',
      {
        property: 'og:image',
        content:
          'https://repository-images.githubusercontent.com/146403319/566babcb-abc0-4ce2-96c2-937a1bafbd6f'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:domain', content: 'phun-ky.net' }],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://phun-ky.net/projects/speccer'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'SPECCER - A tool to annotate or highlight elements'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'SPECCER was originally created to simplify documenting components in a design system, but it can be used to annotate or highlight any HTML element on a webpage. If you need to draw attention to elements, SPECCER is your tool!'
      }
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content:
          'https://repository-images.githubusercontent.com/146403319/566babcb-abc0-4ce2-96c2-937a1bafbd6f'
      }
    ]
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  description:
    'SPECCER was originally created to simplify documenting components in a design system, but it can be used to annotate or highlight any HTML element on a webpage. If you need to draw attention to elements, SPECCER is your tool!',
  title: 'SPECCER - A tool to annotate or highlight elements',
  themeConfig: {
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/phun-ky/speccer/edit/main/docs/:path'
    },
    siteTitle: 'SPECCER',
    logo: {
      src: './logo-speccer-symbol-yellow.svg',
      alt: 'SPECCER logo'
    },
    nav: [
      { text: 'Guide', link: '/guide/introduction/' },
      { text: 'Sponsor', link: '/sponsor' },
      { text: 'Reference', link: '/api/' },
      {
        text: pkg.version,
        items: [
          {
            text: '10.1.0',
            link: 'https://github.com/phun-ky/speccer/blob/v10.1.0/README.md'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/phun-ky/speccer/blob/main/CHANGELOG.md'
          },
          {
            text: 'Contributing',
            link: 'https://github.com/phun-ky/speccer/blob/main/CONTRIBUTING.md'
          },
          {
            text: 'FAQ',
            link: 'https://github.com/phun-ky/speccer/discussions/categories/q-a'
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phun-ky/speccer' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@phun-ky/speccer' }
    ],
    footer: {
      message:
        'Released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="nofollow noreferrer">MIT License</a>.',
      copyright:
        'Copyright © 2018-present <a href="https://phun-ky.net/">Alexander Vassbotn Røyne-Helgesen</a>'
    },
    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          collapsed: false,
          items: [
            { text: 'What is SPECCER?', link: '/guide/introduction/what' },
            { text: 'Introduction', link: '/guide/introduction/' }
          ]
        },
        {
          text: 'Usage',
          collapsed: false,
          items: [
            { text: 'As an import', link: '/guide/usage/import' },
            { text: 'Script', link: '/guide/usage/script' },
            { text: 'React', link: '/guide/usage/react' }
          ]
        },
        {
          text: 'Features',
          collapsed: false,
          items: [
            { text: 'Pin', link: '/guide/features/pin' },
            { text: 'Spacing', link: '/guide/features/spacing' },
            { text: 'Measure', link: '/guide/features/measure' },
            { text: 'Mark', link: '/guide/features/mark' },
            { text: 'Typography', link: '/guide/features/typography' },
            { text: 'Grid', link: '/guide/features/grid' },
            { text: 'A11y', link: '/guide/features/a11y' }
          ]
        },
        {
          text: 'Tutorials',
          collapsed: false,
          items: [
            { text: 'Customization', link: '/guide/tutorials/customization' },
            {
              text: 'Add Pins on Click',
              link: '/guide/tutorials/add-pins-on-click'
            },
            { text: 'Lazy Loading', link: '/guide/tutorials/lazy-loading' },
            { text: 'Storybook', link: '/guide/tutorials/storybook' }
          ]
        },
        {
          text: 'Development',
          link: '/guide/development'
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: typedocSidebar.map((s) => ({
            ...s,
            collapsed: false
          }))
        }
      ]
    }
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    resolve: {
      alias: [
        {
          find: /^.*\/VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/ToggleDarkMode.vue', import.meta.url)
          )
        }
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },

    theme: {
      dark: darkTheme as any,
      light: lightTheme as any
    },
    // (Optional) Preload themes explicitly
    shikiSetup: async (shiki) => {
      await shiki.loadTheme(darkTheme as any);
      await shiki.loadTheme(lightTheme as any);
    }
  }
});
