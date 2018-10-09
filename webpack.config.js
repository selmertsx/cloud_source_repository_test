
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
  externals: [nodeExternals()]
}
