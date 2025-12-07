// docusaurus.config.js
// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UA Writers' Space",
  tagline: 'A community for Ukrainian technical writers',
  favicon: 'img/favicon.ico',

  url: 'https://www.uawriters.space',
  baseUrl: '/',

  organizationName: 'ivancheban',
  projectName: 'ua-writers-space',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 1. Configure Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: { label: 'English' },
      uk: { label: 'Українська' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/', // Blog at root
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "UA Writers' Space",
        logo: {
          alt: 'UA Writers Logo',
          src: 'img/logo.svg',
        },
        items: [
          // 2. Define the items in English here. 
          // Docusaurus will look up translations in code.json based on the 'label' or 'to'.
          {to: '/', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/contribute', label: 'Contribute', position: 'left'},
          
          // 3. Add the Locale Dropdown
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Telegram', href: 'https://t.me/uawriters' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Come Back Alive', href: 'https://savelife.in.ua/en/' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Ukrainian Writers' Space. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;