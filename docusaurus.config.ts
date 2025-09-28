import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'React Datepicker',
  tagline: 'React date picker with Hijri & Gregorian support, theming, localization, and more.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fadikrdiyeh.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fk6-react-datepicker-demo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FadiKrdiyeh', // Usually your GitHub org/user name.
  projectName: 'fk6-react-datepicker-demo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // path: 'i18n',
    // localeConfigs: {
    //   en: {
    //     label: 'English',
    //     direction: 'ltr',
    //     htmlLang: 'en-US',
    //     calendar: 'gregory',
    //     path: 'en',
    //   },
    //   ar: {
    //     label: 'عربي',
    //     direction: 'rtl',
    //     htmlLang: 'ar',
    //     calendar: 'hijri',
    //     path: 'ar',
    //   },
    // },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/calendar-icon.png',
    navbar: {
      title: 'React Datepicker',
      logo: {
        alt: 'React Datepicker',
        // src: 'img/logo.svg',
        src: 'img/calendar-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: 'examples',
          // sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Examples',
        },
        // {
        //   // type: 'link',
        //   // sidebarId: 'examplesSidebar',
        //   position: 'left',
        //   label: 'Examples',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   // sidebarId: 'examplesSidebar',
        //   // to: '/examples',
        //   label: 'Examples',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/FadiKrdiyeh/fk6-react-datepicker',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   position: 'right',
        //   type: 'localeDropdown',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/introduction',
            },
            {
              label: 'Examples',
              to: '/examples',
            },
          ],
        },
        {
          title: 'Comunity',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/fadi-krdiyeh-%F0%9F%87%B5%F0%9F%87%B8-a8391b24b',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Fadi.Krdiyeh/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/fadi_krdiyeh',
            },
          ],
        },
        {
          title: 'Contact Info',
          items: [
            {
              label: 'E-Mail',
              href: 'mailto:fadi6ka@gmail.com',
            },
            {
              label: 'WhatsApp',
              href: 'https://api.whatsapp.com/send/?phone=+963938123636',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/fadi6ka',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/FadiKrdiyeh/',
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 FK6, By Fadi Krdiyeh.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
