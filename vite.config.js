import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


const entry = path.resolve(__dirname, 'src/components/index.js')

export default defineConfig({
  build: {
    lib: {
      entry,
      name: '@unrest/vue-toolbar',
      fileName: (format) => `unrest-vue-toolbar.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@unrest/vue-storage'],
      output: {
        globals: {
          '@unrest/vue-storage': '@unrest/vue-storage',
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});