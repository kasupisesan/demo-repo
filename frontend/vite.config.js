import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
