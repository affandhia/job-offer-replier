// this file will not afect the sandbox but will
// afect the deployment and dowload

import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import livereload from 'rollup-plugin-livereload'
import autoPreprocess from 'svelte-preprocess'

import path from 'path'
const projectRootDir = path.resolve(__dirname)

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'index.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js',
  },
  plugins: [
    svelte({
      preprocess: autoPreprocess({
        postcss: true,
      }),
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css')
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    image(),
    alias({
      entries: [
        { find: 'src', replacement: path.resolve(projectRootDir, 'src') },
      ],
    }),
    resolve(),
    commonjs(),
    !production &&
      livereload({
        watch: 'public',
        verbose: true,
      }),
    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
}
