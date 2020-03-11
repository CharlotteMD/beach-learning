module.exports = {
  entry: ["./src/index.js", "./src/index.css"], // which files need to be included in the bundle. add them all here
  output: {
    // this is where webpack will store the build/bundle
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include all js files
        exclude: /node_modules/, // exclude all node modules
        use: {
          loader: "babel-loader" // here we use the script-loader to load JS but you can use many others including babel-loader (remember these loaders need to be added to npm dependencies in package.json)
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   localIdentName: "[name]_[local]_[hash:base64]",
            //   sourceMap: true
            // }
          }
        ]
      }
    ]
  }
};
