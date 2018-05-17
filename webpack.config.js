const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/public/scripts/main.js",
  // publicPath: 'http://localhost:8080/src/public/scripts/'
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/src", "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    // which browsers to convert javascript for: http://browserl.ist/
                    browsers: [">0.25%", "not ie 11", "not op_mini all"]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
