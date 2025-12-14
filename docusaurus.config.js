// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UA Writers' Space",
  tagline: 'Спільнота для технічних письменників України',
  favicon: 'img/favicon.ico',

  url: 'https://www.uawriters.space',
  baseUrl: '/',

  organizationName: 'ivancheban',
  projectName: 'ua-writers-space',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    localeConfigs: {
      uk: {
        label: 'Українська',
        htmlLang: 'uk-UA',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs
        blog: {
          routeBasePath: '/', // Serve blog at root (Homepage)
          showReadingTime: true,
          blogSidebarTitle: 'Останні дописи',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
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
      // Додає стандартні налаштування для кнопки "Вгору" та змісту
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: "UA Writers' Space",
        logo: {
          alt: 'UA Writers Logo',
          src: 'img/logo.svg',
        },
        // Ховає меню при скролі вниз, що дуже корисно для мобільних (Samsung S22)
        hideOnScroll: true,
        items: [
          // Labels in Ukrainian (Default Locale)
          {to: '/', label: 'Блог', position: 'left'},
          {to: '/about', label: 'Про нас', position: 'left'},
          {to: '/contribute', label: 'Як опублікувати', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        // Using HTML to render the "Stand with Ukraine" text in the footer
        copyright: `
          <div class="footer-donation">
            <p><strong>Ми з України.</strong> Підтримайте Україну, зробивши пожертву в цей <a href="https://savelife.in.ua/en/" target="_blank" rel="noopener noreferrer">надійний фонд</a>.</p>
          </div>
          <div class="footer-copyright">
            © ${new Date().getFullYear()} Ukrainian Writers' Space. Усі права застережено.
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;