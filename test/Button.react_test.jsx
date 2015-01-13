import React from 'react/addons';
import should from 'should';

import Button from '../app/jsx/components/Button.react';

const TestUtils = React.addons.TestUtils;


describe('Button', () => {
  it('renders button div', () => {
    const button = TestUtils.renderIntoDocument(
      <Button />
    );
    TestUtils.isCompositeComponent(button).should.be.ok;
    button.getDOMNode().textContent.should.be.eql('button');
  });
});
