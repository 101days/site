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

    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://chinese-fonts-cdn.deno.dev/packages/sypxzs/dist/思源屏显臻宋/result.css',
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: 'Algorithm', activeMatch: '/algorithm/', link: '/algorithm/00' },
      { text: 'Game', activeMatch: '/game/', link: '/game/00' },
    ],

    sidebar: {
      '/algorithm/': {
        base: '/algorithm/',
        items: [
          { text: 'README', link: 'README' },
          { text: '童蒙三百题，新岁一卷码', link: '00' },
          { text: '新春摸鱼日，归来滑窗始', link: '11' },
          { text: '22', link: '22' },
          { text: '33', link: '33' },
          { text: '44', link: '44' },
          { text: '55', link: '55' },
          { text: '66', link: '66' },
          { text: '77', link: '77' },
          { text: '88', link: '88' },
          { text: '99', link: '99' },
        ],
      },
      '/game/': {
        base: '/game/',
        items: [
          { text: 'README', link: 'README' },
          {
            text: '第一周',
            collapsed: true,
            items: [
              { text: '00. 笨鸟，状态机，第一行代码', link: '00' },
              { text: '01. 元表，类，手搓 OOP', link: '01' },
              { text: '02. 暂停，随机，三个奖牌', link: '02' },
              { text: '03. 计划，实战，小丑牌', link: '03' },
              { text: '04. 砖块，组织，精灵图', link: '04' },
              { text: '05. 三月，周日，新想法', link: '05' },
              { text: '06', link: '06' },
            ],
          },
          {
            text: '第二周',
            collapsed: true,
            items: [
              { text: '07', link: '07' },
              { text: '08', link: '08' },
              { text: '09', link: '09' },
              { text: '10', link: '10' },
              { text: '11', link: '11' },
              { text: '12', link: '12' },
              { text: '13', link: '13' },
            ],
          },
        ],
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/101days' }],

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
