var path = require('path');
var webpack = require('webpack');
module.exports = {
    cache: true,


    entry: {
      app: './app/jsx/app.jsx'
    },


    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'app.js',
      chunkFilename: '[chunkhash].js'
    },


    resolve: {
      extensions: ['', '.js', '.jsx', '.styl']
    },


    module: {
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
        {test: /\.styl$/, loader: 'style!css!stylus?paths=node_modules/jeet/stylus/'},
        {test: /.*\.(gif|png|jpg)$/, loaders: ['file?hash=sha512&digest=hex&size=16&name=static/[hash].[ext]', 'image?optimizationLevel=7&interlaced=false']}
      ]
    }
};
