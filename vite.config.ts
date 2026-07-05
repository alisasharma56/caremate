import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      quoteStyle: 'single',
      semicolons: false,
    }),
    vanillaExtractPlugin(),
    react(),
  ],
  server: {
    port: 3000,
  },
})
