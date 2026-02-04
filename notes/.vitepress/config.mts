import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '101 Days',
  titleTemplate: ':title',
  description: 'Reclaiming agency in the age of AI',
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,

  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'script',
      {
        defer: '',
        src: 'https://a.mancuoj.me/script.js',
        'data-website-id': 'a14d141e-b078-45ae-b30c-fdb78f8193d2',
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [{ text: 'Algorithm', activeMatch: '/algorithm/', link: '/algorithm/00' }],

    sidebar: {
      algorithm: {
        items: [{ text: '00', link: '/algorithm/00' }],
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/101-days' }],

    editLink: {
      pattern: `https://github.com/101-days/notes/edit/main/:path`,
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最近更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },
    docFooter: { prev: '上一页', next: '下一页' },
    outlineTitle: '大纲',
    langMenuLabel: '切换语言',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '侧边栏目录',
    skipToContentLabel: '跳转至内容',
    darkModeSwitchTitle: '切换到暗色模式',
    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchLabel: '切换主题',
  },
})
