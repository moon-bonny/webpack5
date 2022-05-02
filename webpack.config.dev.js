let { merge } = require("webpack-merge");
let base = require("./webpack.config.base.js");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("dev"),
    }),
  ],
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    compress: true,
    client: { progress: true },
    port: 5000,
    // open: true,
    // mock数据
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      middlewares.unshift({
        name: "fist-in-array",
        // `path` 是可选的
        path: "/user",
        middleware: (req, res) => {
          res.send({ name: "moon mock" });
        },
      });

      return middlewares;
    },

    // 请求代理
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000/",
    //     pathRewrite: {
    //       "/api": "", // 重写，把请求代理到接口服务器上
    //     },
    //   },
    // },
  },
  // watch: true,
  // watchOptions: {
  //   poll: 1000, //每秒检查一次变动
  //   aggregateTimeout: 600, // 防抖
  //   ignored: /node_modules/,
  // },
});
