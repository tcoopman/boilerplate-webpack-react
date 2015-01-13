/* @flow */
import React from 'react';

var exampleImage = require('../../images/example.jpg');


class _HelloWorld {
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <img src={exampleImage} width="500px"/>
        <p>Picture from <a href="https://unsplash.com/">https://unsplash.com/</a></p>
      </div>
    );
  }
}
module.exports = React.createClass(_HelloWorld.prototype);
