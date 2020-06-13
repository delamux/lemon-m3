const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const { couldStartTrivia } = require("typescript");

const basePath = __dirname;

module.exports = (env, arg) => {
  const dotenvOptions = {
    path: arg.mode === "development" ? "./.env.dev" : "./.env.prod",
    safe: true,
    allowEmptyValues: true,
    systemvars: true,
  };

  const config = {
    context: path.join(basePath, "src"), //We config the applications root path
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    stats: "errors-only",
    entry: {
      app: "./index.tsx",
      appStyles: ["./styles.scss"],
      vendorStyles: ["../node_modules/bootstrap/dist/css/bootstrap.css"],
    },
    output: {
      // name ahora es app & appStyles
      filename: "[name].[chunkHash].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[name]__[local]_[hash:base64:5]",
                },
                localsConvention: "camelCase",
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.(png|jpg)$/,
          exclude: /node_modules/,
          loader: "url-loader?limit=5000",
          options: {
            esModule: false,
          },
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      new Dotenv(dotenvOptions),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
        // quitamos el hash porque usamos el chunk
        // hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
  };

  return config;
};
