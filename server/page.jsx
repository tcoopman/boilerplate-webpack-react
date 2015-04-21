'use strict';
var React = require('react');


module.exports = function(request, fileNames, cb) {
	var script, style;
	if (Array.isArray(fileNames)) {
		script = PUBLIC_PATH + fileNames[0];
		style = PUBLIC_PATH + fileNames[1]
	} else {
		script = PUBLIC_PATH + fileNames;
	}

	var StyleElem;
	if (style) {
		StyleElem = <link rel='stylesheet' id='server-side-style' type='text/css' href={style} />
	} else {
		StyleElem = <link />
	}

  // Change this to your main module
	var HelloWorld = require('../app/jsx/components/HelloWorld.react');
  var html = React.renderToString(<HelloWorld />);

  console.log(html);

  return React.renderToString(
		<html>
			<head>
				{StyleElem}
			</head>
			<body>
				<div id='react-content' dangerouslySetInnerHTML={{__html: html}} />
				<script src={script}></script>
			</body>
		</html>
	);
};
