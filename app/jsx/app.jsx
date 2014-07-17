const React = require('react');

class _HelloWorld {
  render () {
    return (
      <div>Hello World</div>
    );
  }
}
const HelloWorld = React.createClass(_HelloWorld.prototype);


const render = () => React.renderComponent(
    <HelloWorld />,
    document.body
);
render();
