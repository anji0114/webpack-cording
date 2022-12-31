const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./assets"),
    filename: "js/main.js",
  },
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "> 0.25%, not dead" }]],
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        // 追加
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    // scss
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),

    // html

    // image copy
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),

    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
    }),

    // image compression
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            oxipng: {
              level: 3,
              interlace: false,
            },
          },
        },
      },
    }),

    new CleanWebpackPlugin(),
  ],
};
