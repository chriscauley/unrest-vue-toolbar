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
      external: [
        'vue',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@unrest/vue-toolbar': entry,
    },
  },
  plugins: [vue()],
});