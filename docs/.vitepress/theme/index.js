// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CollapseBox from '../../bot-help/components/CollapseBox.vue'
import ClassicCollapseBox from '../../bot-help/components/ClassicCollapseBox.vue'
import SidebarToggle from './components/SidebarToggle.vue'
import SponsorBanner from './components/SponsorBanner.vue'
import logo from '../../assets/images/icon.ico'
import './style.css'

// The host answers 404 for a page whose file name has a dot in it, so these
// pages were renamed. Old links still open the 404 page; send them on.
const RENAMED_PAGES = {
  '/haruki-proxy/pc.v3': '/haruki-proxy/pc-v3',
  '/haruki-proxy/pc.v2': '/haruki-proxy/pc-v2',
  '/haruki-proxy/android.india': '/haruki-proxy/android-india',
  '/haruki-proxy/android.v2': '/haruki-proxy/android-v2'
}

function redirectRenamedPage() {
  if (typeof window === 'undefined') return
  const { pathname, search, hash } = window.location
  const target = RENAMED_PAGES[pathname.replace(/\.html$/, '')]
  if (target) window.location.replace(`${target}${search}${hash}`)
}

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': () => h(SidebarToggle),
      'home-hero-before': () => h(SponsorBanner)
    })
  },
  enhanceApp({ app, siteData }) {
    redirectRenamedPage()
    siteData.value = {
      ...siteData.value,
      themeConfig: { ...siteData.value.themeConfig, logo }
    }
    app.component('CollapseBox', CollapseBox)
    app.component('ClassicCollapseBox', ClassicCollapseBox)
  }
}
