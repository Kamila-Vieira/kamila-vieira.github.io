const developEnvironment = process.env.NODE_ENV === "development";

export default {
  devtool: "source-map",
  mode: process.env.NODE_ENV,
  output: {
    filename: developEnvironment ? "index.js" : "index.min.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: !developEnvironment,
  },
};
