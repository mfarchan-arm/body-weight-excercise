/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/landing.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "dashboard.html",
    }),
  ],
  devServer: {
    watchFiles: ["./src/*.html"],
    port: 8080,
    open: true,
    hot: true,
    allowedHosts: ['all'],
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};