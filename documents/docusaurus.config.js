const path = require('path');

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

const BASE_URL = '/vis-engine';

module.exports = {
  title: 'vis-engine Documentation',
  tagline: 'A sample gl render engine toolkit.',
  url: 'https://sakitam-gis.github.io',
  // baseUrl: `${BASE_URL}/`,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/logo.svg',
  organizationName: 'sakitam-gis',
  projectName: 'vis-engine',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars/docs.sidebars.js'),
          editUrl: 'https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'vis-engine',
        src: `images/logo.svg`,
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'api',
          activeBasePath: 'api',
          label: 'API',
          position: 'right',
        },
        {
          href: 'https://github.com/sakitam-gis/vis-engine',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
            {
              label: 'API Reference',
              to: 'api',
            },
            {
              label: 'Playground',
              to: 'playground',
            },
          ],
        },
        {
          title: 'Changelog',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sakitam-gis/vis-engine/changelog.md',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sakitam-gis/vis-engine',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sakitam-gis. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['javascript', 'jsx', 'typescript', 'tsx'],
    },
    algolia: {
      appId: '7HSJME72X5',
      apiKey: '867f56d90de9d14dbb4cd3d0928ff13f',
      indexName: 'vis-engine',
      contextualSearch: true,
    },
  },
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        sidebar: { sidebarFile: null },
      },
    ],
    // [
    //   path.resolve(__dirname, './plugins/plugin-overwrite-slug.js'),
    //   {
    //     basePath: 'api',
    //     files: [
    //       {
    //         path: 'index.md',
    //         slug: '/',
    //       },
    //     ],
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebars/api.sidebars.js'),
        editUrl: 'https://github.com/sakitam-gis/vis-engine/edit/master/documents/docs',
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    // path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
