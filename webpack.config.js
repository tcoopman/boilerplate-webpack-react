var path = require('path');
var webpack = require('webpack');
module.exports = {
    cache: true,
    entry: {
      app: './app/jsx/app.jsx'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: 'dist/',
      filename: '[name].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
        {test: /\.styl$/, loader: 'style!css!stylus?paths=node_modules/jeet/stylus/'}
      ]
    }
};
