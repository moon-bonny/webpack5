let { merge } = require("webpack-merge");
let base = require("./webpack.config.base.js");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 压缩css
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "production",
  output: {
    // publicPath: "http://www.moon.com", // 伪地址
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: { removeAttributeQuotes: true, collapseWhitespace: true }, //压缩配置
      hash: true, //打包带上hash戳
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("prod"),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css, 会导致js不压缩，所以需要安装js压缩插件
      new CssMinimizerPlugin(),
      // 压缩js
      new TerserPlugin({ test: /\.js(\?.*)?$/i }),
    ],

    // 分割代码块
    splitChunks: {
      // 缓存组
      cacheGroups: {
        // 公共模块
        commons: {
          name: "common",
          chunks: "initial", // 还可能有异步模块 这里暂不考虑
          minSize: 0, //生成 chunk 的最小体积
          minChunks: 1, //拆分前必须共享模块的最小 chunks 数,当前代码块引用多少次才被抽离
        },
        vendor: {
          name: "vendor",
          priority: 1, // 权重，值越高越先被抽离，防止node_modules在前面的common抽离完了后面没被抽离到
          test: /[\\/]node_modules[\\/]/,
          chunks: "all", //包括异步和非异步代码块
        },
      },
    },
  },
});
