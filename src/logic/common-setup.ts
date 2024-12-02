import type { App } from 'vue'
import { i18n } from '~/composables/useI18n'
import { useDark } from '~/composables/useDark'

export function setupApp(app: App) {
  // Inject a globally available `$app` object in template
  app.config.globalProperties.$app = {
    context: '',
  }
  useDark()
  app.use(i18n)
  // Provide access to `app` in script setup with `const app = inject('app')`
  app.provide('app', app.config.globalProperties.$app)
  // Here you can install additional plugins for all contexts: popup, options page and content-script.
  // example: app.use(i18n)
  // example excluding content-script context: if (context !== 'content-script') app.use(i18n)
}
