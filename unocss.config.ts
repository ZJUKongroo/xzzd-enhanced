import { defineConfig } from 'unocss/vite'
// import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    // presetUno(),
    // presetAttributify(),
    // presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
