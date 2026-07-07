import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

function aliasGeneratedRouteTreeImports(): Plugin {
  const routeTreePath = fileURLToPath(
    new URL('./src/routeTree.gen.ts', import.meta.url),
  )

  const rewrite = () => {
    if (!existsSync(routeTreePath)) {
      return
    }

    const content = readFileSync(routeTreePath, 'utf8')
    const relativeRouteImport = `from '${'.'}/routes/`
    const aliasRouteImport = "from '@/routes/"
    const nextContent = content.replaceAll(relativeRouteImport, aliasRouteImport)

    if (nextContent !== content) {
      writeFileSync(routeTreePath, nextContent)
    }
  }

  return {
    name: 'alias-generated-route-tree-imports',
    enforce: 'post',
    buildStart: rewrite,
    closeBundle: rewrite,
    configureServer(server) {
      rewrite()
      server.watcher.on('change', (filePath) => {
        if (filePath === routeTreePath) {
          setTimeout(rewrite)
        }
      })
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
