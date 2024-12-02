import { createApp } from 'vue'
import App from './Sidepanel.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'
import { i18n } from '~/composables/useI18n'
import { useDark } from '~/composables/useDark'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
useDark()
setupApp(app)
app.use(i18n)
app.mount('#app')
