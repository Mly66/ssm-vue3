import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

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
      },
      '/upload': { 
        target: 'https://tc.mofashi.ltd', // 代理图片上传请求
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/upload/, "/api/v1/upload"), // 重写路径
        secure: true, // 如果目标是 HTTPS，建议开启此选项
        logLevel: 'debug',
      }
    }
  }
});
