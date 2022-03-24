/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import prefresh from '@prefresh/vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import devtools from './plugins/devtools'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  build: {
    chunkSizeWarningLimit: 100,
    target: 'esnext'
  },
  plugins: [prefresh(), eslintPlugin({ formatter: 'stylish' }), devtools()],
  resolve: {
    alias: [
      { find: 'react', replacement: 'preact/compat' },
      { find: 'react-dom', replacement: 'preact/compat' },
      { find: '@/', replacement: '/src/' }
    ]
  },
  server: {
    open: '/'
  }
})
