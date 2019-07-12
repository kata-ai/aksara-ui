module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-typescript'),
            require.resolve('@babel/preset-react'),
            [
              require.resolve('@babel/preset-env'),
              {
                targets: {
                  browsers: ['last 2 chrome versions', 'last 2 firefox versions']
                }
              }
            ]
          ],
          plugins: [require.resolve('@babel/plugin-proposal-class-properties')]
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
