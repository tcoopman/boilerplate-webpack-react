var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var path = require('path');

var app = 'app';
var appJoin = path.join.bind(null, app);
var dist = 'dist';
var distJoin = path.join.bind(null, dist);
globs = {
    stylus: 'styles/**/*.styl',
    jsx: 'jsx/**/*.jsx',
    html: '**/*.html'
};

gulp.task('html', function () {
  gulp.src(appJoin(globs.html))
    .pipe(gulp.dest(distJoin()));
});


gulp.task('webpack:build', function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.output.filename = 'app.[hash].js';
  myConfig.plugins = myConfig.plugins || [];
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			'process.env': {
				// This has effect on the react lib size
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError('webpack:build', err);
		// replace app.js in the index file with the hash name
		var appJsName = stats.toJson().assetsByChunkName.main;
		gulp.src('./app/index.html')
			.pipe(replace('app.js', appJsName))
			.pipe(gulp.dest('./dist/'));
		gutil.log('[webpack:build]', stats.toString({
			colors: true
		}));
		callback();
	});
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError('webpack:build-dev', err);
		gutil.log('[webpack:build-dev]', stats.toString({
			colors: true
		}));
		callback();
	});
});


// The development server (the recommended option for development)
gulp.task("default", ['html', "webpack-dev-server"]);

gulp.task('webpack-dev-server', function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = 'eval';
	myConfig.debug = true;
  myConfig.plugins = [new webpack.HotModuleReplacementPlugin()];
	myConfig.entry = [
		'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './app/jsx/app.jsx'
	];

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
    contentBase: './dist',
    hot: true,
		publicPath: myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(8080, 'localhost', function(err) {
		if(err) throw new gutil.PluginError('webpack-dev-server', err);
		gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
	});
});
