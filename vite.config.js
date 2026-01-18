import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// import { VitePWA } from 'vite-plugin-pwa' // Optional: enable when ready

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico'],
    //   manifest: {
    //     name: 'Owenga Joseph Portfolio',
    //     short_name: 'Portfolio',
    //     theme_color: '#0f172a',
    //     background_color: '#0b1220',
    //     display: 'standalone',
    //     icons: [
    //       { src: '/favicon.ico', sizes: '64x64 32x32 16x16', type: 'image/x-icon' },
    //     ],
    //   },
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'es2018',
    assetsInlineLimit: 2048, // 2kb: inline only very small assets
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
        },
      },
    },
  },
  esbuild: {
    treeShaking: true,
    legalComments: 'none',
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
})
