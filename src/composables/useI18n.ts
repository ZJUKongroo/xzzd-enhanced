// useI18n enable multi-language experience for plugin
import { createI18n } from 'vue-i18n'
import { useWebExtensionStorage } from './useWebExtensionStorage'
// each language has seperated file
import cnMsg from '~/i18n/cn.json'
import enMsg from '~/i18n/en.json'

type available_local = 'cn' | 'en'
const prefered_locale = useWebExtensionStorage<available_local>('locale', 'cn')

export const i18n = createI18n({
  legacy: false,
  locale: prefered_locale.value,
  fallbackLocale: 'cn',
  messages: {
    cn: cnMsg,
    en: enMsg,
  },
})

// prefered_locale is an asynchronous ref, thus need watch to detect the change of its value
watch(prefered_locale, (val, _) => {
  i18n.global.locale.value = val
})
