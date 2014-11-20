/* @flow */
var React = require('react');
var HelloWorld = require('./components/HelloWorld.react');


var render = () => React.render(
    <HelloWorld />,
    document.body
);
render();
