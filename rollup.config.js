import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  output: [
    {
      file: './lib/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: './lib/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [autoExternal(), resolve(), commonjs(), typescript()]
};
