import { defineConfig } from 'vite'

export default defineConfig({
  root: 'packages/app',
  css: {
    transformer: 'lightningcss'
  },
})
