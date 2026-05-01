// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CollapseBox from '../../bot-help/components/CollapseBox.vue'
import ClassicCollapseBox from '../../bot-help/components/ClassicCollapseBox.vue'
import SidebarToggle from './components/SidebarToggle.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(SidebarToggle)
    })
  },
  enhanceApp({ app }) {
    app.component('CollapseBox', CollapseBox)
    app.component('ClassicCollapseBox', ClassicCollapseBox)
  }
}
