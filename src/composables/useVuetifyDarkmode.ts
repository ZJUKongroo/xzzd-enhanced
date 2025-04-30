import { watch } from 'vue'
import { useTheme } from 'vuetify'
import { usePreferredDark } from '@vueuse/core'

export function useVuetifyDarkmode() {
  const theme = useTheme()
  const isDark = usePreferredDark()

  const setVuetifyDarkmode = (isDarkMode: boolean) => {
    theme.global.name.value = isDarkMode ? 'dark' : 'light'
  }

  setVuetifyDarkmode(isDark.value)

  watch(
    () => isDark,
    () => {
      setVuetifyDarkmode(isDark.value)
    }
  )
}
