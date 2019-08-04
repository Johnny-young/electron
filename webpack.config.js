const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "/build"),
    // chunkFilename: "",
    // publicPath: ""
  },
  mode: "development",
  target: 'electron-renderer',
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    contentBase: path.resolve(__dirname, '/build'),
    compress: true,
    port: 3300,
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin()
  ]
}

