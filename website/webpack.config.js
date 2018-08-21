const path = require('path');
const glob = require('glob');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelPreset = require('./config/babelrc');
const postcssConfig = require('./config/postcss');

const pathRegex = /^.*[\\/]/;
const packageList = {};

glob.sync('../packages/*').forEach(path => {
  const packageName = path.replace(pathRegex, '');
  const {
    name,
    version,
    description,
    dependencies,
    peerDependencies
  } = require(`../packages/${packageName}/package.json`);

  packageList[packageName] = {
    name,
    version,
    description,
    dependencies,
    peerDependencies
  };
});

module.exports = (env, argv) => {
  // I know there's a lot going on here, but listen.
  const isProduction =
    argv.mode === 'production' ||
    (env && env.NODE_ENV === 'production') ||
    process.env.NODE_ENV === 'production';

  return {
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    mode: isProduction ? 'production' : 'development',
    entry: {
      demo: path.resolve(__dirname, './src/index.tsx')
    },
    output: {
      filename: isProduction
        ? 'static/js/[name].[chunkhash:8].js'
        : 'static/js/bundle.js',
      chunkFilename: isProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : 'static/js/[name].chunk.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx'],
      mainFields: ['kata-kit:src', 'main']
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
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: babelPreset(isProduction)
              }
            },
            {
              test: /\.mdx?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: babelPreset(isProduction)
                },
                '@mdx-js/loader'
              ]
            },
            {
              // Any JS/TS files ending with `.raw` will be extracted
              // in raw text.
              test: [/\.raw\.(js|jsx|ts|tsx)$/, /\.txt$/],
              exclude: /node_modules/,
              use: ['raw-loader']
            },
            {
              test: /^(?!.*\.raw\.tsx?$).*\.tsx?$/,
              exclude: /node_modules/,
              use: [
                // Chaining TypeScript with babel allows for finer control
                // of the build process.
                {
                  loader: 'babel-loader',
                  options: babelPreset(isProduction)
                },
                {
                  loader: require.resolve('ts-loader'),
                  options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true,
                    configFile: path.resolve(__dirname, 'tsconfig.build.json')
                  }
                }
              ]
            },
            {
              // exclude css from stylable component
              test: /^(?!.*\.st\.css$).*\.css$/,
              use: [
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].css',
        path: path.resolve(__dirname, 'build')
      }),
      new HtmlWebpackPlugin({
        title: 'kata-kit',
        template: path.join(__dirname, 'public/index.html'),
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
      new GenerateJsonPlugin('kata-kit-packages.json', packageList)
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      disableHostCheck: true,
      hot: true,
      historyApiFallback: {
        // Paths with dots should still use the history fallback.
        // See https://github.com/facebookincubator/create-react-app/issues/387.
        disableDotRule: true
      }
    }
  };
};
