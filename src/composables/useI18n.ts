import { createI18n } from 'vue-i18n'
import cnMsg from '~/i18n/cn.json'
import enMsg from '~/i18n/en.json'

const prefered_locale = localStorage.getItem('locale')

export const i18n = createI18n({
  locale: prefered_locale || 'cn',
  fallbackLocale: 'cn',
  messages: {
    cn: cnMsg,
    en: enMsg,
  },
})
