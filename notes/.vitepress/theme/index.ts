// https://vitepress.dev/guide/custom-theme
import { h, watchEffect } from 'vue'
import { useRoute } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'

function getExploration(path: string): string {
  if (path.startsWith('/algorithm/') || path === '/algorithm') return 'algorithm'
  if (path.startsWith('/game/') || path === '/game') return 'game'
  return ''
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    const route = useRoute()

    watchEffect(() => {
      if (typeof document !== 'undefined') {
        const exploration = getExploration(route.path)
        if (exploration) {
          document.documentElement.setAttribute('data-exploration', exploration)
        } else {
          document.documentElement.removeAttribute('data-exploration')
        }
      }
    })

    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
