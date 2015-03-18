/* @flow */
var React = require('react');

var exampleImage = require('../../images/example.jpg');


export default class HelloWorld extends React.Component {
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
