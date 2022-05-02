let path = require("path");
// let HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽取出css文件

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除文件
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 拷贝文件
const webpack = require("webpack");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/[name].js",
    path: path.resolve("dist"), //绝对路径
    assetModuleFilename: "images/[name][ext][query]",
  },
  resolve: {
    modules: [path.resolve("node_modules")],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".json", ".vue"],
  },
  plugins: [
    //   生成html文件
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   // minify: { removeAttributeQuotes: true, collapseWhitespace: true }, //压缩配置
    //   // hash: true, //打包带上hash戳
    // }),
    // 抽取出css文件
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./doc", // 源文件，相对于当前目录路径
          to: "./doc", // 目标文件，相对于output.path文件路径，会生成到 dist/doc 目录下
        },
      ],
    }),
    new webpack.BannerPlugin("copyright by Moon in 2022"),

    // 优化
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }), //忽略moment语言包,手动引入语言包
  ],
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
      // 在一个 bundle 文件中 import（或 require）目标文件
      // {
      //   test: /\.jpg|png|jpeg$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // limit: 8 * 1024,
      //       outputPath: "images/",
      //       name: "[name].[ext]",
      //       // publicPath: "http://cdn.baidu.com/images",
      //     },
      //   },
      // },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            esModule: false, // 配置后图片方能正常显示
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "eslint-loader",
      //     options: {
      //       enforce: "pre",
      //     },
      //   },
      // },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 把es6转成es5
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
};
