// Karma configuration
var path = require('path');

module.exports = function(config) {
  config.set({
    // ... normal karma configuration

    files: [
    // all files ending in "_test"
    'test/*_test.jsx',
    'test/**/*_test.jsx'
    // each file acts as entry point for the webpack configuration
    ],


    frameworks: ['mocha'],


    browsers: ['Chrome'],


    preprocessors: {
      // add webpack as preprocessor
      'test/data/*.jsx': ['webpack'],
      'test/*_test.jsx': ['webpack'],
      'test/**/*_test.jsx': ['webpack']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js',
        chunkFilename: '[chunkhash].js'
      },


      resolve: {
        extensions: ['', '.js', '.jsx', '.styl'],
        packageMains: ["webpack", "browser", "web", "browserify", "main"]
      },


      module: {
        loaders: [
          {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
          {test: /.*\.(gif|png|jpg)$/, loaders: ['file?hash=sha512&digest=hex&size=16&name=[hash].[ext]', 'image-webpack-loader?optimizationLevel=7&interlaced=false']}
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-webpack')
    ]

  });
};
