import React from 'react';

import TodoCounter from '../TodoCounter';

describe('TodoCounter component tests', () => {
  let originalConsole = Object.assign({}, console);

  afterEach(() => {
    console.error = originalConsole.error;
  });

  it('should show the text quantity missing', () => {
    const todoCounterWrapper = mount(<TodoCounter missing={2} />);
    expect(todoCounterWrapper.text()).toBe('2 missing');
  });

  it('should throw an error when omitting "missing" param', () => {
    console.error = jest.fn();
    shallow(<TodoCounter />);
    expect(console.error).toHaveBeenCalled();
  });

  it('should throw an error when passing not number "missing" param', () => {
    console.error = jest.fn();
    const todoCounterWrapper = mount(<TodoCounter missing={'foo'}/>);
    expect(console.error).toHaveBeenCalled();
  });
});
