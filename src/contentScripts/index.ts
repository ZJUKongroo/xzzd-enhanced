/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupApp } from '~/logic/common-setup'
import '~/styles/index'
import { useDark } from '~/composables/useDark'
import { i18n } from '~/composables/useI18n'

// function onDOMLoaded() {
//   document.body.innerHTML = ''
//   console.log(111)
// }

// if (document.readyState !== 'loading') {
//   onDOMLoaded()
// }
// else {
//   document.addEventListener('DOMContentLoaded', () => onDOMLoaded())
// }

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  router.beforeEach((to, _, next) => {
    if (to.meta.title) {
      document.title = to.meta.title as string
    }
    next()
  })
  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })
  document.open()
  document.write('<!DOCTYPE html><head></head><body></body>')
  document.close()

  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  root.id = 'app'
  const styleEl = document.createElement('link')
  // const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  container.appendChild(styleEl)
  document.body.appendChild(root)
  document.body.appendChild(container)
  const app = createApp(App)
  useDark()
  setupApp(app)
  app.use(router)
  app.use(i18n)
  app.mount(root)
})()
