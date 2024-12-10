import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true, 
    host: '127.0.0.1', 
    port: 5173, 
    https: false, 
    hotOnly: false, 
    proxy: {
      '/api': {
        target: 'http://localhost:9090', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ""), 
        logLevel: 'debug', 
      }
    }
  }
})
