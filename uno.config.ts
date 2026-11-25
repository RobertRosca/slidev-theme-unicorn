import { defineConfig } from 'unocss'

// Slidev merges this with its own UnoCSS config
export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-gradient-to-r from-white to-purple-50 text-gray-900 dark:(from-fuchsia-700 to-purple-800 text-white)',
  },
  theme: {
    fontFamily: {
      title: ['Gilroy Bold', 'sans-serif'],
    },
  },
})
