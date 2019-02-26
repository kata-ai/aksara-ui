const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: './tsconfig.json',
          transpileOnly: true
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          propFilter: prop => {
            if (prop.parent == null) {
              return true;
            }

            // Don't include extended React classes in props table.
            return (
              prop.parent.fileName.indexOf('node_modules/@types/react') < 0
            );
          }
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx', '.md', '.mdx');
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@storybook-utils': path.resolve(__dirname, './'),
    '@wicara': path.resolve(__dirname, '../', 'packages'),
    '@kata-kit': path.resolve(__dirname, '../', 'packages'),
    '@docs': path.resolve(__dirname, '../', 'docs')
  });
  config.resolve.mainFields = ['kata-kit:src', 'main'];

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
      tslint: 'tslint.json'
    })
  );

  // Workaround for webpack v4.
  if (config.resolve.plugins) {
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    );
  } else {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    ];
  }

  return config;
};
