import { defineConfig } from 'unocss'

// Slidev merges this with its own UnoCSS config
export default defineConfig({
  shortcuts: {
    // theme gradients; override these in a deck's uno.config.ts to recolour
    'bg-unicorn': 'bg-[linear-gradient(to_right,var(--un-gradient-stops))] from-fuchsia-700 to-purple-800',
    'bg-unicorn-light': 'bg-[linear-gradient(to_right,var(--un-gradient-stops))] from-white to-purple-50',
    // custom the default background
    'bg-main': 'bg-unicorn-light text-gray-900 dark:(bg-unicorn text-white)',
  },
  theme: {
    fontFamily: {
      title: ['Gilroy Bold', 'sans-serif'],
    },
  },
})
