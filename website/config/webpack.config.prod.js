// @ts-check
'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const paths = require('./paths');
const getClientEnvironment = require('./env');
const babelPreset = require('./babelrc');
const postcssConfig = require('./postcss');

const pathRegex = /^.*[\\/]/;
const packageList = {};

// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
const publicPath = paths.servedPath;
// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = publicPath.slice(0, -1);
// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

// Collects all kata-kit packages available in the `packages` folder and
// generates a JSON file out of it. The JSON file is generated with
// `GenerateJSONPlugin`.
glob.sync(path.join(paths.appPath, '../packages/*')).forEach(pkgPath => {
  const packageName = pkgPath.replace(pathRegex, '');
  const {
    name,
    version,
    description,
    dependencies,
    peerDependencies
  } = require(path.join(
    paths.appPath,
    `../packages/${packageName}/package.json`
  ));

  packageList[packageName] = {
    name,
    version,
    description,
    dependencies,
    peerDependencies
  };
});

/** @type {webpack.Configuration} */
const config = {
  devtool: shouldUseSourceMap ? 'source-map' : false,
  mode: 'production',
  entry: [require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
    path: paths.appBuild,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx'],
    mainFields: ['kata-kit:src', 'main'],
    plugins: [
      // @ts-ignore
      new TsconfigPathsPlugin({ configFile: paths.appTsConfig })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('source-map-loader'),
        enforce: 'pre',
        include: path.resolve(__dirname, './src')
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            // Any JS/TS files ending with `.raw` will be extracted
            // in raw text.
            test: [/\.raw\.(js|ts|tsx)$/, /\.txt$/],
            exclude: /node_modules/,
            use: ['raw-loader']
          },
          {
            test: /(?!.*\.raw\.js?$).*\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: babelPreset(true)
            }
          },
          {
            test: /\.mdx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: babelPreset(true)
              },
              '@mdx-js/loader'
            ]
          },
          {
            test: /^(?!.*\.raw\.tsx?$).*\.tsx?$/,
            exclude: /node_modules/,
            use: [
              // Chaining TypeScript with babel allows for finer control
              // of the build process.
              {
                loader: 'babel-loader',
                options: babelPreset(true)
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  // disable type checker - we will use it in fork plugin
                  transpileOnly: true,
                  configFile: paths.appTsProdConfig
                }
              }
            ]
          },
          {
            // exclude css from stylable component
            test: /^(?!.*\.st\.css$).*\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: postcssConfig
              }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: postcssConfig
              },
              {
                loader: 'sass-loader',
                options: { outputStyle: 'compressed' }
              }
            ]
          },
          {
            exclude: [/\.js$/, /\.tsx?$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'kata-kit',
      template: paths.appHtml,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[chunkhash:8].css',
      chunkFilename: 'static/css/[name].[chunkhash:8].css'
    }),
    new GenerateJsonPlugin('kata-kit-packages.json', packageList),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      watch: paths.appSrc,
      tsconfig: paths.appTsConfig,
      tslint: paths.appTsLint
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

module.exports = config;
