var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    "app": "./app/app.jsx",
    "vendor": ["react", "react-dom", "react-router", "script!jquery/dist/jquery.min.js", "script!foundation-sites/dist/foundation.min.js"]
  },

  externals: {
    "jquery": "jQuery" //jquery will be availabel as var jQuery, because foundation require this name
  },

  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./public/vendor.js")
  ],

  output: {
    path: __dirname,
    filename: "./public/[name].js"
  },

  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./app/components"
    ],
    alias: {
      applicationStyles: "app/styles/app.scss"
    },
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    loaders:[
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        },
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },

  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
    ]
  },

  devtool: "inline-source-map" //only for develope purpose because it makes the bundle.js is very bigger
};
