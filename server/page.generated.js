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

	var __hotUpdateAPI = (function () { var React = __webpack_require__(1); var getHotUpdateAPI = __webpack_require__(3); return getHotUpdateAPI(React, "HelloWorld.react.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "HelloWorld.react.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/home/thomas/Workspace/boilerplate-webpack-react/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__hotUpdateAPI.updateMountedInstances); }); }

	/** @jsx React.DOM *//* @flow */
	var React = __webpack_require__(1);

	var exampleImage = __webpack_require__(5);


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

	module.exports = __hotUpdateAPI.createClass(_HelloWorld.prototype);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var updaters = {},
	    makeModuleUpdater = __webpack_require__(4);

	function getHotUpdateAPI(React, filename, moduleId) {
	  var exists = updaters.hasOwnProperty(moduleId);
	  if (!exists) {
	    updaters[moduleId] = makeModuleUpdater(React, filename);
	  }

	  var updater = updaters[moduleId];
	  return {
	    createClass: exists ? updater.updateClass : updater.createClass,
	    updateMountedInstances: updater.updateMountedInstances
	  };
	}

	module.exports = getHotUpdateAPI;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Provides `createClass` and `updateClass` which can be used as drop-in
	 * replacement for `React.createClass` in a module. If multiple components
	 * are defined in the same module, assumes their `displayName`s are different.
	 */
	module.exports = function (React, filename) {
	  var componentUpdaters = {};

	  function createClass(spec) {
	    var displayName = spec.displayName,
	        componentUpdater;

	    if (componentUpdaters[displayName]) {
	      throw new Error(
	        'Found duplicate displayName in ' + filename + ': "' + displayName + '".\n' +
	        'react-hot-loader uses displayName to distinguish between several components in one file.'
	      );
	    }

	    componentUpdater = __webpack_require__(6)(React);
	    componentUpdaters[displayName] = componentUpdater;

	    return componentUpdater.createClass(spec);
	  }

	  function updateClass(spec) {
	    var displayName = spec.displayName,
	        componentUpdater = componentUpdaters[displayName];

	    return componentUpdater ?
	      componentUpdater.updateClass(spec) :
	      createClass(spec);
	  }

	  function updateMountedInstances() {
	    Object.keys(componentUpdaters).forEach(function (displayName) {
	      componentUpdaters[displayName].updateMountedInstances();
	    });
	  }

	  return {
	    createClass: createClass,
	    updateClass: updateClass,
	    updateMountedInstances: updateMountedInstances
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "630593064214887e.jpg"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Provides `createClass` and `updateClass` which can be used to create and
	 * later patch a single component with a new version of itself.
	 */
	module.exports = function (React) {
	  var mounted = [];

	  /**
	   * Keeps track of mounted instances.
	   */
	  var TrackInstancesMixin = {
	    componentDidMount: function () {
	      mounted.push(this);
	    },

	    componentWillUnmount: function () {
	      mounted.splice(mounted.indexOf(this), 1);
	    }
	  };


	  /**
	   * Establishes a prototype as the "source of truth" and updates its methods on
	   * subsequent invocations, also patching fresh prototypes to pass calls to it.
	   */
	  var assimilatePrototype = (function () {
	    var storedPrototype,
	        knownPrototypes = [];

	    function wrapFunction(key) {
	      return function () {
	        if (storedPrototype[key]) {
	          return storedPrototype[key].apply(this, arguments);
	        }
	      };
	    }

	    function patchProperty(proto, key) {
	      proto[key] = storedPrototype[key];

	      if (typeof proto[key] !== 'function' ||
	        key === 'type' ||
	        key === 'constructor') {
	        return;
	      }

	      proto[key] = wrapFunction(key);

	      if (proto.__reactAutoBindMap[key]) {
	        proto.__reactAutoBindMap[key] = proto[key];
	      }
	    }

	    function updateStoredPrototype(freshPrototype) {
	      storedPrototype = {};

	      for (var key in freshPrototype) {
	        if (freshPrototype.hasOwnProperty(key)) {
	          storedPrototype[key] = freshPrototype[key];
	        }
	      }
	    }

	    function reconcileWithStoredPrototypes(freshPrototype) {
	      knownPrototypes.push(freshPrototype);
	      knownPrototypes.forEach(function (proto) {
	        for (var key in storedPrototype) {
	          patchProperty(proto, key);
	        }
	      });
	    }

	    return function (freshPrototype) {
	      updateStoredPrototype(freshPrototype);
	      reconcileWithStoredPrototypes(freshPrototype);
	    };
	  })();


	  /**
	   * Mixes instance tracking into the spec, lets React produce a fresh version
	   * of the component and assimilates its changes into the old version.
	   */
	  function injectMixinAndAssimilatePrototype(spec) {
	    spec.mixins = spec.mixins || [];
	    spec.mixins.push(TrackInstancesMixin);
	    var Component = (React.createClass)(spec);
	    assimilatePrototype(Component.type.prototype);
	    return Component;
	  }


	  /**
	   * Updates a React component recursively, so even if children define funky
	   * `shouldComponentUpdate`, they are forced to re-render.
	   */
	  function forceUpdateTree(instance) {
	    if (instance.forceUpdate) {
	      instance.forceUpdate();
	    }

	    if (instance._renderedComponent) {
	      forceUpdateTree(instance._renderedComponent);
	    }

	    for (var key in instance._renderedChildren) {
	      forceUpdateTree(instance._renderedChildren[key]);
	    }
	  }


	  var Component;

	  /**
	   * Proxies React.createClass to enable hot updates.
	   */
	  function createClass(spec) {
	    if (Component) {
	      throw new Error('createClass may only be called once for a given updater.');
	    }

	    Component = injectMixinAndAssimilatePrototype(spec);
	    return Component;
	  }

	  /**
	   * Proxies React.createClass to apply hot update.
	   */
	  function updateClass(spec) {
	    if (!Component) {
	      throw new Error('updateClass may only be called after createClass.');
	    }

	    injectMixinAndAssimilatePrototype(spec);
	    return Component;
	  }

	  /**
	   * Re-binds methods of mounted instances and re-renders them.
	   */
	  function updateMountedInstances() {
	    mounted.forEach(function (instance) {
	      instance._bindAutoBindMethods();
	      forceUpdateTree(instance);
	    });
	  }

	  return {
	    createClass: createClass,
	    updateClass: updateClass,
	    updateMountedInstances: updateMountedInstances
	  };
	};


/***/ }
/******/ ])