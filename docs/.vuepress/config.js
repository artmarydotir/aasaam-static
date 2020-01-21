module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/fa/': {
      lang: 'fa-IR', // this will be set as the lang attribute on <html>
      title: 'آسام',
      description: 'گروه نرم افزاری آسام'
    },
    '/en/': {
      lang: 'en-US',
      title: 'aasaam',
      description: 'aasaam describ'
    }
  },
  themeConfig: {
    locales: {
      '/fa/': {
        // text for the language dropdown
        selectText: 'انتخاب زبان',
        // label for this locale in the language dropdown
        label: 'فارسی',
        // Aria Label for locale in the dropdown
        // ariaLabel: 'persian',
        // config for Service Worker
        // serviceWorker: {
        //   updatePopup: {
        //     message: "New content is available.",
        //     buttonText: "Refresh"
        //   }
        // },
        algolia: {},
        nav: [
          { text: 'خانه', link: '/fa/' },
          { text: 'راهنما', link: '/fa/guide/' },
          { text: 'آسام', link: 'https://aasaam.com' },
        ],
        // sidebar: 'auto',
        // displayAllHeaders: true,
        sidebar: [
          {
            title: 'Group 1',   // required
            // path: '',      // optional, which should be a absolute path.
            collapsable: false, // optional, defaults to true
            sidebarDepth: 3,    // optional, defaults to 1
            children: [
               '/fa/guide/eps',
               '/fa/guide/monitoring',
            ]
          },
          {
            title: 'Group 2',
            collapsable: false,
            children: [
              '/fa/installation/',
            ]
          }
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'english',
        // ariaLabel: 'english',
        algolia: {},
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'aasaam', link: 'https://aasaam.com' },
        ],
      }
    },
    // sidebar: 'auto',
    sidebar: [
      {
        title: 'Group 1',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          '/en/guide/eps',
          '/en/guide/monitoring',
        //   '/en/guide/',
        ]
      },
      {
        title: 'Group 2',
        collapsable: false,
        children: [
          '/en/installation/',
        ]
      }
    ],
    lastUpdated: 'Last Updated', // string | boolean // based on git add timestamp
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    'vuepress-plugin-redirect'
  ],
  plugins: {
    redirect: {
      redirectors: [
        // customize your redirectors
        {
          base: '/', // automatically redirect `/my-plugins/` to a subpage
          // storage: true, // save the result of the last visit to `localStorage` for the next redirect
          alternative: [
            // provide an alternate list
            // if no page was matched, you will get a "404 not found"
            '/fa/', // equivalent to `/my-plugins/mathjax/
          ],
        },
      ],
    },
  },
}