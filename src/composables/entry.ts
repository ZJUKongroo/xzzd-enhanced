import '~/styles/entry.css'

const sep_time = 200
const default_duration = 500

export function entry(way: string, element: HTMLElement, sep: number = sep_time, callback?: () => void): void {
  const childs = element.children
  for (let i = 0; i < childs.length; i++) {
    const child = childs[i] as HTMLElement
    child.style.transition = '0s'
    child.classList.add(`entry-${way}`)
    setTimeout(() => {
      child.style.transition = `${default_duration / 1000}s`
      child.classList.remove(`entry-${way}`)
    }, (i + 1) * sep)
  }
  if (typeof callback === 'function') {
    setTimeout(callback, childs.length * sep + 500)
  }
}

export function leave(way: string, element: HTMLElement, sep: number = sep_time, callback?: () => void): void {
  const childs = element.children
  for (let i = 0; i < childs.length; i++) {
    const child = childs[i] as HTMLElement
    setTimeout(() => {
      child.style.transition = `${default_duration / 1000}s`
      child.classList.add(`entry-${way}`)
    }, (childs.length - i) * sep)
  }
  if (typeof callback === 'function') {
    setTimeout(callback, childs.length * sep + 500)
  }
}

export function fadeOut(element: HTMLElement, duration: number = default_duration, callback?: () => void): void {
  element.style.transition = `${duration / 1000}s`
  element.style.opacity = '0'
  if (typeof callback === 'function') {
    setTimeout(callback, duration)
  }
}

export function fadeIn(element: HTMLElement, duration: number = default_duration, callback?: () => void): void {
  element.style.transition = `${duration / 1000}s`
  element.style.opacity = '0'
  setTimeout(() => {
    element.style.opacity = '1'
    if (typeof callback === 'function') {
      setTimeout(callback, duration)
    }
  }, 0)
}
