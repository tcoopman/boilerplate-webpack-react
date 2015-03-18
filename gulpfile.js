'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var del = require('del');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var path = require('path');

var dist = 'public';
var distJoin = path.join.bind(null, dist);

// The development server (the recommended option for development)
gulp.task('default', function(callback) {
	runSequence('clean', 'webpack-dev-server', callback);
});


// Production build
gulp.task('build', function(callback) {
	runSequence('clean', 'webpack:build', callback);
});


gulp.task('clean', function(cb) {
  del(['./public/**/*'], cb);
});


gulp.task('webpack:build', function(callback) {
	// modify some webpack config options
  var prodConfig = webpackConfig.map(function(config) {
    var myConfig = Object.create(config);
    myConfig.plugins = myConfig.plugins || [];
    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    );

    return myConfig;
  });

	// run webpack
	webpack(prodConfig, function(err, stats) {
		if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));
		callback();
	});
});


gulp.task('webpack-dev-server', function(callback) {
  var publicPath = 'http://localhost:8080/assets/';

	// modify some webpack config options
  var browserConfig = webpackConfig.filter(function(config) {
    return config.name === 'browser';
  })[0];

	browserConfig = Object.create(browserConfig);

	browserConfig.devtool = 'eval';
	browserConfig.debug = true;
  browserConfig.plugins = browserConfig.plugins || [];
  browserConfig.plugins = browserConfig.plugins.concat([new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()]);
	browserConfig.entry = [
		'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './app/jsx/app.jsx'
	];

  // don't extract the css to a file for the dev server.
  browserConfig.module.loaders = browserConfig.module.loaders.map(function(loader) {
    if (loader.test.toString() === /\.styl$/.toString()) {
      return {test: /\.styl$/, loader: 'style!css!stylus'};
    } else {
      return loader;
    }
  });

  browserConfig.output.publicPath = publicPath;

  // modify some webpack config options of the server
  var serverConfig = Object.create(webpackConfig.filter(function(config) {
    return config.name === 'server';
  })[0]);

  // FIXME we musn't overwrite the plugins, only change the PUBLIC_PATH
  serverConfig.plugins = [
    new webpack.DefinePlugin({
      PUBLIC_PATH: JSON.stringify(publicPath)
    })
  ];

	// run webpack
	webpack(serverConfig, function(err, stats) {
		if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(browserConfig), {
      contentBase: './public',
      hot: true,
      publicPath: '/assets/',
      stats: {
        colors: true
      }
    }).listen(8080, '0.0.0.0', function(err) {
      if(err) throw new gutil.PluginError('webpack-dev-server', err);
      gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
	});
});
