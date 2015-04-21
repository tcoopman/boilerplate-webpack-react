/* @flow */
import React from 'react';
import HelloWorld from './components/HelloWorld.react';

console.log(document.getElementById('react-content'));
const render = () => React.render(
    <HelloWorld />,
    document.getElementById('react-content')
);
render();
