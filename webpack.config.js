var webpack = require("webpack");
var path = require("path");
var envFile = require("node-env-file");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

try {
  var envFilename = path.join(__dirname, "config/" + process.env.NODE_ENV + ".env");
  envFile(envFilename);
}catch(e){

};

module.exports = {
  entry: {
    "app": "./app/app.jsx",
    "vendor": ["firebase", "react-redux", "react", "react-dom", "react-router", "redux", "redux-thunk", "node-uuid", "moment", "script!jquery/dist/jquery.min.js", "script!foundation-sites/dist/foundation.min.js"]
  },

  externals: {
    "jquery": "jQuery" //jquery will be availabel as var jQuery, because foundation require this name
  },

  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
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
      "./app/components",
      "./app/api"
    ],
    alias: {
      app: "app",
      applicationStyles: "app/styles/app.scss",
      actions: "app/actions/actions.jsx",
      reducers: "app/reducers/reducers.jsx",
      configureStore: "app/store/configureStore.jsx"
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

  devtool: (process.env.NODE_ENV === "production") ? undefined : "inline-source-map" //only for develope purpose because it makes the bundle.js is very bigger
};
