import { createApp } from 'vue'
import App from './Options.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
setupApp(app)
app.mount('#app')
