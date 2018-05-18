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
import svg from 'rollup-plugin-svg'

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
  external: [
    'classnames',
    'dom-helpers',
    'lodash-es',
    'moment',
    'react-custom-scrollbars',
    'react-dates',
    'react-overlays',
    'shortid'
  ],
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
    commonjs(),
    svg(),
    env === 'production' && uglify()
  ]
}
