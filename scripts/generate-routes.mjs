import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

// Use the generator shipped with the installed router plugin so their versions
// stay aligned without adding a separate generator dependency.
const require = createRequire(import.meta.url)
const pluginRequire = createRequire(require.resolve('@tanstack/router-plugin'))
const { Generator, getConfig } = pluginRequire('@tanstack/router-generator')
const root = fileURLToPath(new URL('../', import.meta.url))
const config = getConfig({ target: 'react', quoteStyle: 'single', semicolons: false }, root)

await new Generator({ config, root }).run()
