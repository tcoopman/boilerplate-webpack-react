module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict';
	var React = __webpack_require__(1);


	module.exports = function(request, fileNames, cb) {
		var script, style;
		if (Array.isArray(fileNames)) {
			script = ("http://localhost:8080/assets/") + fileNames[0];
			style = ("http://localhost:8080/assets/") + fileNames[1]
		} else {
			script = ("http://localhost:8080/assets/") + fileNames;
		}

		var StyleElem;
		if (style) {
			StyleElem = React.createElement("link", {rel: "stylesheet", id: "server-side-style", type: "text/css", href: style})
		} else {
			StyleElem = React.createElement("link", null)
		}

	  // Change this to your main module
		var HelloWorld = __webpack_require__(2);
	  var html = React.renderToString(React.createElement(HelloWorld, null));

	  console.log(html);

	  return React.renderToString(
			React.createElement("html", null, 
				React.createElement("head", null, 
					StyleElem
				), 
				React.createElement("body", null, 
					React.createElement("div", {id: "content", dangerouslySetInnerHTML: {__html: html}}), 
					React.createElement("script", {src: script})
				)
			)
		);
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var reactHotApi = require("/home/thomas/Workspace/boilerplate-webpack-react/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"); if (typeof reactHotApi !== "function") {   return; }  module.makeHot = module.hot.data ? module.hot.data.makeHot : reactHotApi(require("react/lib/ReactMount")); })(); }

	/** @jsx React.DOM *//* @flow */
	var React = __webpack_require__(1);

	var exampleImage = __webpack_require__(3);


	function _HelloWorld(){"use strict";}
	  _HelloWorld.prototype.render=function()  {"use strict";
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "Hello World"), 
	        React.createElement("img", {src: exampleImage, width: "500px"}), 
	        React.createElement("p", null, "Picture from ", React.createElement("a", {href: "https://unsplash.com/"}, "https://unsplash.com/"))
	      )
	    );
	  };

	module.exports = React.createClass(_HelloWorld.prototype);


	/* REACT HOT LOADER */ if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HelloWorld.react.jsx" + ": " + err.message); } }); module.hot.dispose(function (data) {   data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) {   module.exports = module.makeHot(module.exports, "__MODULE_EXPORTS") } }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c71eceaa211e1a6866c25ef0ce8ac0ae.jpg"

/***/ }
/******/ ])