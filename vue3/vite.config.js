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
    open: true, // 自动打开浏览器
    host: '127.0.0.1', // 使用本机地址
    port: 8081, // 开发服务器端口
    https: false, // 使用 http
    hotOnly: false, // 不启用热更新
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端服务地址
        changeOrigin: true, // 修改源地址
        rewrite: (path) => path.replace(/^\/api/, ""), // 去掉请求路径的 `/api` 前缀
        logLevel: 'debug', // 开启调试，查看代理日志
      }
    }
  }
})
