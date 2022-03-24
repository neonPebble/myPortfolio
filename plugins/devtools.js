/* eslint-disable */
import { normalizePath } from 'vite'
import path from 'path'
import debug from 'debug'

export default function preactDevtoolsPlugin() {
  const log = debug('vite:preact-devtools')

  let entry = ''
  let config
  let found = false

  const plugin = {
    name: 'preact:devtools',

    // Ensure that we resolve before everything else
    enforce: 'pre',

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    resolveId(id, importer = '') {
      // Get the main entry file to inject into
      if (
        !found &&
        /\.html$/.test(importer) &&
        !/\/node_modules\//.test(id) &&
        /\.[tj]sx?$/.test(id)
      ) {
        found = true

        entry = normalizePath(path.join(config.root, id))

        // TODO: Vite types require explicit return
        // undefined here. They're lacking the "void" type
        // in their declarations
        return undefined
      }
    },

    transform(code, id) {
      if (entry === id && !config.isProduction) {
        const source = 'preact/debug'
        code = `import "${source}";\n${code}`

        log(`[inject] ${source} -> ${id}`)
        return code
      }
    }
  }

  return plugin
}
