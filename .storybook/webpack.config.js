module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
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
              prop.parent.fileName.indexOf('node_modules/@types/react') < 0 ||
              prop.parent.fileName.indexOf('node_modules/@types/styled-system') < 0
            );
          }
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
