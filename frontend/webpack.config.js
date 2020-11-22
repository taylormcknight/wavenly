module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"],
      },
      {
        test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: 'utf8',
            },
          },
        ],
      },
    ]
  }
};
