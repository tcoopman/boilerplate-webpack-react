const React = require('react');
const HelloWorld = require('./components/HelloWorld.react');


const render = () => React.renderComponent(
    <HelloWorld />,
    document.body
);
render();
