const esbuild = require('esbuild')
const pkg = require('./package.json')

const args = process.argv

const NODE_ENV = args[2]

const externals = pkg.esbuild.externals

console.log(NODE_ENV, externals)

const result = esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  sourcemap: true,
  outfile: 'dist/index.js',
  define: { 'process.env.NODE_ENV': NODE_ENV || '"development"' },
  external: [...externals]
})

console.log(result)