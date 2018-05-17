import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import scss from 'rollup-plugin-scss'
import typescript from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

import pkg from './package.json'

const env = process.env.NODE_ENV || 'development'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['classnames', 'moment', 'react-dates', 'react-custom-scrollbars', 'shortid'],
  plugins: [
    external(),
    typescript(),
    scss({
      output: 'dist/style.css'
    }),
    postcss({
      output: 'dist/style.css',
      extract: true,
      modules: true,
      extensions: ['.scss']
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup'
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    resolve(),
    commonjs({
      // need to find a fix for DateRangePicker component erro while importing
      // namedExports: {
      //   // left-hand side can be an absolute path, a path
      //   // relative to the current directory, or the name
      //   // of a module in node_modules
      //   'node_modules/react-dates/index.js': [ 'DateRangePicker' ]
      // },
    }),
    env === 'production' && uglify()
  ]
}
