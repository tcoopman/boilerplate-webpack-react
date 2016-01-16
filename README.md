# Boilerplate-webpack-react

# Deprectated

This repo is deprecated, I haven't updated in a while. Only use for inspiration.

## Introduction

This is a simple boilerplate project to start fast with Reactjs, webpack and
gulp, including offline rendering with hapi.

This includes some webpack loaders like [image-webpack-loader](https://www.npmjs.org/package/image-webpack-loader)
for optimizing images and other cool things like [Hot Module Replacement](http://gaearon.github.io/react-hot-loader/)
for React.

### New

Support for offline rendering. This uses [hapi](http://hapijs.com/) for the server
but you can easily change that in `server\index.js`

## Usage

Copy this repo.

### Webpack-dev-server:

* Run `gulp`
* Run `node server`
* Open http://localhost:3000

When running, you can edit HelloWorld.react.jsx and save it, your edits will
be visible without reloading.

### Build for server:

* Run `gulp build`

This will create the minified build files

To test it, run `node server`.

## TODO

* expand the example code with fonts and json

## License

Copyright (c) 2014 Thomas Coopoman

MIT (http://opensource.org/licenses/MIT)
