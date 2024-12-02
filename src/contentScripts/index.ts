import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupApp } from '~/logic/common-setup'
import '~/styles/index'
import 'element-plus/theme-chalk/dark/css-vars.css'

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  router.beforeEach((to, _, next) => {
    if (to.meta.title) {
      document.title = to.meta.title as string
    }
    next()
  })
  // write a new document to replace the original document.
  document.open()
  document.write('<!DOCTYPE html><head></head><body></body>')
  document.close()

  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  // create root element for us to mount
  const root = document.createElement('div')
  root.id = 'app'
  // load stylesheet
  const styleEl = document.createElement('link')
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  container.appendChild(styleEl)
  document.body.appendChild(root)
  document.body.appendChild(container)
  // create vue app
  const app = createApp(App)
  // common setup
  setupApp(app)
  // main page need specific vue-router instance for routing
  app.use(router)
  app.mount(root)
})()
