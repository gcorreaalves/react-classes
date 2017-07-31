import React from 'react';

import TodoFilter from '../TodoFilter';
import A from '../A';

describe('TodoFilter component tests', () => {
  let todoFilterWrapper, handleFilter;

  beforeEach(() => {
    handleFilter = jest.fn();
    todoFilterWrapper = shallow(<TodoFilter handleFilter={handleFilter} />);
  });

  it('filter all', () => {
    todoFilterWrapper.find(A).at(0).simulate('click');
    expect(handleFilter).toBeCalledWith('all');
  });

  it('filter active', () => {
    todoFilterWrapper.find(A).at(1).simulate('click');
    expect(handleFilter).toBeCalledWith('active');
  });

  it('filter completed', () => {
    todoFilterWrapper.find(A).at(2).simulate('click');
    expect(handleFilter).toBeCalledWith('completed');
  });
});
