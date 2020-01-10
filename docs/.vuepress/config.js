module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/fa': {
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
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'aasaam', link: 'https://aasaam.com' },
    //   {
    //     text: 'Languages',
    //     ariaLabel: 'Language Menu',
    //     items: [
    //       { text: 'persian', link: '/language/fa/' },
    //       { text: 'english', link: '/language/en/' }
    //     ]
    //   }
    // ],
    locales: {
      '/fa': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'فارسی',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // config for Service Worker
        // serviceWorker: {
        //   updatePopup: {
        //     message: "New content is available.",
        //     buttonText: "Refresh"
        //   }
        // },
        // algolia docsearch options for current locale
        // algolia: {},
        nav: [
          { text: 'خانه', link: '/fa/' },
          { text: 'راهنما', link: '/fa/guide/' },
          { text: 'آسام', link: 'https://aasaam.com' },
          {
            text: 'انتخاب زبان',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'persian', link: '/fa/' },
              { text: 'english', link: '/en/' }
            ]
          }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'انگلیسی',
        ariaLabel: 'Languages',
        nav: [
          { text: 'خانه', link: '/en/' },
          { text: 'راهنما', link: '/en/guide/' },
          { text: 'آسام', link: 'https://aasaam.com' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'persian', link: '/fa/' },
              { text: 'english', link: '/en/' }
            ]
          }
        ],
        // sidebar: {
        //   '/zh/': [/* ... */],
        //   '/zh/nested/': [/* ... */]
        // }
      }
    },
    sidebar: 'auto',
    // sidebar: [
    //   {
    //     title: 'Group 1',   // required
    //     path: '/',      // optional, which should be a absolute path.
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1,    // optional, defaults to 1
    //     children: [
    //       '/guide/',
    //       '/guide/front',
    //       '/installation/',
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     collapsable: false,
    //     children: [
    //       '/installation/',
    //     ]
    //   }
    // ],
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