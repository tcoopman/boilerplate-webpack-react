const React = require('react');

const exampleImage = require('../images/example.jpg');

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
const HelloWorld = React.createClass(_HelloWorld.prototype);


const render = () => React.renderComponent(
    <HelloWorld />,
    document.body
);
render();
