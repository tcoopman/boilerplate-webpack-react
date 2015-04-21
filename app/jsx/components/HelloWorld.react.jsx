/* @flow */
import React from 'react';

var exampleImage = require('../../images/example.jpg');


export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <img src={exampleImage} width="600px"/>
        <p>Picture from <a href="https://unsplash.com/">https://unsplash.com/somewhere</a></p>
      </div>
    );
  }
}
