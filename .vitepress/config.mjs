import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  base: "/",
  head: [["link", { rel: "icon", href: "https://images.shiromiku.moe/images/f42445fcc982c5fecc7471f94fff637d.png" }]],
  title: "HarukiBot 帮助文档",
  description: "本文档将引导您使用 HarukiBot",
  themeConfig: {
    logo: 'https://images.shiromiku.moe/images/9b8abaa21f4baf7498b16c4ac8f08cc9.png',
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

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    footer: {
      copyright: "Copyright©️ 2024 IwasakiYouko",
    },
  }
})
