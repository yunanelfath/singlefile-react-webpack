//webpack.config.js
//https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "inline-source-map",
  entry: {
    main: process.env.NODE_APP === 'native' ? "./react-native/index.js" : "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      'react-native$': 'react-native-web',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: {
          loader: 'file-loader',
          options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/images'
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
    }),
  ],
};
