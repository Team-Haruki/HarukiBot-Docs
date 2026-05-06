import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  server: {
  allowedHosts: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  base: "/",
  head: [["link", { rel: "icon", href: "/assets/images/navicon.ico" }]],
  title: "HarukiBot NEO帮助文档",
  description: "本文档将引导您使用 HarukiBot NEO",
  themeConfig: {
    logo: 'https://images.shiromiku.moe/images/HarukiDocsAvatar.webp',
     // 设置搜索框的样式
     search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar: {
      '/bot-help/': [
        {
          text: 'HarukiBot NEO 帮助',
          items: [
            { text: '写在前面', link: '/bot-help/' },
            { text: '如何使用工具箱', link: '/bot-help/toolbox_guide' },
            { text: '个人资料与账号', link: '/bot-help/account' },
            { text: '卡牌查询', link: '/bot-help/card' },
            { text: '音乐与乐曲', link: '/bot-help/music' },
            { text: '活动查询', link: '/bot-help/event' },
            { text: '榜线与 SK', link: '/bot-help/sk' },
            { text: '组卡', link: '/bot-help/recommend' },
            { text: '养成查询', link: '/bot-help/cultivation' },
            { text: 'MySekai 查询', link: '/bot-help/mysekai' },
            { text: '昵称与别名', link: '/bot-help/alias' },
            { text: '杂项命令', link: '/bot-help/misc' }
          ]
        }
      ]
    },
    aside: "left", // 设置右侧侧边栏在左侧显示

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    footer: {
      copyright: "Copyright©️ 2026 Haruki Dev Team",
    },
  }
})
