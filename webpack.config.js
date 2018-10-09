
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const SRC_DIR = path.join(__dirname, 'src')

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  target: 'node',
  output: {
    filename: 'index.js',
    libraryTarget: 'this'
  },
  resolve: {
    extensions: [ '.js', '.json' ]
  },
  externals: [nodeExternals()]
}
