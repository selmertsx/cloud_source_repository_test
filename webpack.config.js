
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: "./src/index.js",
  target: 'node',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'this'
  },
  resolve: {
    extensions: [ '.js', '.json' ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: [nodeExternals()]
}
