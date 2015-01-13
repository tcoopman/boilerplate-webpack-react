'use strict';
var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonLoaders = [
  {test: /.*\.json$/, loader: 'json'},
  {test: /.*\.md$/, loader: 'file'},
  {test: /\.jsx$/, loaders: ['react-hot', '6to5-loader']},
  {test: /.*\.(gif|png|jpg)$/, loaders: ['file?hash=sha512&digest=hex&size=16&name=[hash].[ext]', 'image-webpack-loader?optimizationLevel=7&interlaced=false']},
  {test: /.*\.(eot|woff|ttf|svg)/, loader: 'file?hash=sha512&digest=hex&size=16&name=cd [hash].[ext]'}
];
var assetsPath = path.join(__dirname, 'public/assets');
var publicPath = 'assets/';
var extensions = ['', '.js', '.jsx', '.styl'];

module.exports = [
  {
    name: 'browser',
    entry: './app/jsx/app.jsx',
    output: {
      path: assetsPath,
      publicPath: publicPath,
      filename: 'app.[hash].js'
    },
    resolve: {
      extensions: extensions
    },
    module: {
      loaders: commonLoaders.concat([{test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus')}])
    },
    plugins: [
			function() {
				this.plugin('done', function(stats) {
					fs.writeFileSync(path.join(__dirname, 'server', 'stats.generated.json'), JSON.stringify(stats.toJson()));
				});
			},
      new ExtractTextPlugin('style.[contenthash].css', {
        allChunks: true
      })
		]
  },
  {
    name: 'server',
    entry: './server/page.jsx',
    target: 'node',
    output: {
      path: assetsPath,
      filename: '../../server/page.generated.js',
      publicPath: publicPath,
      libraryTarget: 'commonjs2'
    },
    resolve: {
      extensions: extensions
    },
    externals: /^[a-z\-0-9]+$/, // Every non-relative module is external,
    module: {
      loaders: commonLoaders.concat([
        {test: /\.styl$/, loader: 'null'}
      ])
    },
    plugins: [
      new webpack.DefinePlugin({
        PUBLIC_PATH: JSON.stringify(publicPath)
      })
    ]
  }
];
