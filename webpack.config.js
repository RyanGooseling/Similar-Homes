module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: [/\.m?jsx$/, /\.m?js$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};