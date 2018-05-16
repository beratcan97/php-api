const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/public/scripts/main.js',
  // publicPath: 'http://localhost:8080/src/public/scripts/'
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + "/src", "public")
  },
};
