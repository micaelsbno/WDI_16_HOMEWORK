const path = require('path')

const config = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    stats: 'errors-only'
    // contentBase: path.join(__dirname, 'dist')
  }
}

module.exports = config