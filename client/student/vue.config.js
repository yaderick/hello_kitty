
module.exports = {
  devServer: {
    compress: true,
    port: 9900,
    host: '0.0.0.0',
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  lintOnSave: false,
  outputDir: 'hello_kitty_student',
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // new HtmlWebpackPlugin({
      //   minify: false,
      // }),
    ],
  },
};
