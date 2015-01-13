import React from 'react/addons';
import should from 'should';

import HelloWorld from '../app/jsx/components/HelloWorld.react';

const TestUtils = React.addons.TestUtils;


describe('HelloWorld', () => {
  it('renders h1 tag', () => {
    const helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    );
    TestUtils.isCompositeComponent(helloWorld).should.be.ok;
  });
});
