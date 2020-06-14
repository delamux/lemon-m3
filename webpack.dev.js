const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  stats: "errors-only",
  devtool: "inline-source-map",
  plugins: [
    new Dotenv({
      path: "./dev.env",
    }),
  ],
});
