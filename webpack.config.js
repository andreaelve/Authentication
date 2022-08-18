const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./client/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader'",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devtool: "source-map",
  plugins: [
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
};