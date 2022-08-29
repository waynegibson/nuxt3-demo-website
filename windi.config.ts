import { defineConfig } from 'windicss/helpers'
import { theme } from './common/theme'

export default defineConfig({
  darkMode: 'class',
  preflight: true,
  attributify: false,
  extract: {
    include: [
      './components/**/*.{vue,js}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './utils/**/*.{js,ts}',
      './app.vue',
    ],
  },
  theme: {
    fontFamily: theme.fontFamily,
    extend: {
      colors: theme.colors,
    },
  },
  plugins: theme.plugins,
  shortcuts: {},
})
