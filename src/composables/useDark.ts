import { usePreferredDark } from '@vueuse/core'

export function useDark() {
  const isDark = usePreferredDark()
  if (isDark.value) {
    applyDark()
  }
  watch(isDark, (val, _) => {
    if (val)
      applyDark()
    else applyLight()
  })
}

function applyDark() {
  document.documentElement.classList.add('dark')
}

function applyLight() {
  document.documentElement.classList.remove('dark')
}
