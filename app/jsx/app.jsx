/* @flow */
import React from 'react';
import Helloworld from './components/HelloWorld.react';


const render = () => React.render(
    <HelloWorld />,
    document.getElementById('react-content')
);
render();
