import { createApp } from 'vue'
import App from './Sidepanel.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'
import { i18n } from '~/composables/useI18n'

const app = createApp(App)
setupApp(app)
app.use(i18n)
app.mount('#app')
