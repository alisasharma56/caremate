import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

function aliasGeneratedRouteTreeImports(): Plugin {
  const routeTreePath = fileURLToPath(
    new URL('./src/routeTree.gen.ts', import.meta.url),
  )

  return {
    name: 'alias-generated-route-tree-imports',
    enforce: 'post',
    transform(code, id) {
      if (id.split('?')[0] !== routeTreePath) {
        return
      }

      // Rewrite imports in memory so the router generator and file watcher
      // do not repeatedly overwrite each other's output and reset app state.
      const nextCode = code.replaceAll("from './routes/", "from '@/routes/")
      if (nextCode !== code) {
        return { code: nextCode, map: null }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      quoteStyle: 'single',
      semicolons: false,
    }),
    aliasGeneratedRouteTreeImports(),
    vanillaExtractPlugin(),
    react(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
