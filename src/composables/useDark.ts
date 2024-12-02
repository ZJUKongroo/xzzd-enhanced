// useDark provides a global responsive dark mode for plugins
import { usePreferredDark } from '@vueuse/core'

export function useDark() {
  const isDark = usePreferredDark()
  if (isDark.value) {
    applyDark()
  }
  // watch the change of system dark mode settings
  watch(isDark, (val, _) => {
    if (val)
      applyDark()
    else applyLight()
  })
}

// add dark class to <html> to enable darkmode
function applyDark() {
  document.documentElement.classList.add('dark')
}

function applyLight() {
  document.documentElement.classList.remove('dark')
}
