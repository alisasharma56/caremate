import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const routeTreePath = resolve(process.cwd(), 'src/routeTree.gen.ts')

if (existsSync(routeTreePath)) {
  const content = readFileSync(routeTreePath, 'utf8')
  const nextContent = content.replaceAll("from './routes/", "from '@/routes/")

  if (nextContent !== content) {
    writeFileSync(routeTreePath, nextContent)
  }
}
