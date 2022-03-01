import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/


// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue(),
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
    ],
    // 开发
    server: {
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT),
      open: false,
      proxy: {
        // string shorthand
        '/foo': 'http://localhost:4567/foo',
        // with options
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    // 共享
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ' @import "@/styles/global.scss"; '
          // additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    }
  }
})
