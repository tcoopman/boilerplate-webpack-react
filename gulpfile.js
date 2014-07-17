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
})

// The development server (the recommended option for development)
gulp.task("default", ['html', "webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});
