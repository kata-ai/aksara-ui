import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: './tsc-out/index.js',
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
  plugins: [autoExternal(), resolve(), commonjs(), filesize()]
};
