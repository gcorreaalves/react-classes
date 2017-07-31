import React from 'react';

import Todo from '../Todo';

describe('Todo component tests', () => {
  let todoWrapper;
  
  beforeEach(() => {
    todoWrapper = shallow(<Todo>Test the task</Todo>);
  });

  it('should render a Todo component', () => {
    expect(todoWrapper).toMatchSnapshot();
  });

  it('should show the Todo component text', () => {
    const text = todoWrapper.find('TodoStyled').dive().text();
    expect(text).toBe('Test the task');
  });

  it('should set the Todo component as completed', () => {
    todoWrapper = shallow(<Todo completed>Test the completed task</Todo>);
    const isCompleted = todoWrapper.find('TodoStyled').prop('completed');
    expect(isCompleted).toBeTruthy();
  });

  it('should show a button to remove the Todo component', () => {
    expect(todoWrapper.find('Button').length).toBe(1);
  });

  it('should call handleTodoClick function when clicking on Todo Component', () => {
    const handleTodoClick = jest.fn();
    todoWrapper = shallow(
      <Todo handleTodoClick={handleTodoClick}>
        Test the completed task
      </Todo>
    );
    todoWrapper.find('TodoStyled').simulate('click');
    expect(handleTodoClick).toHaveBeenCalledTimes(1);
  });

  it('should call handleRemoveClick function when clicking on Remove Button', () => {
    const handleTodoDeleteClick = jest.fn();
    todoWrapper = shallow(
      <Todo handleTodoDeleteClick={handleTodoDeleteClick}>
        Test the completed task
      </Todo>
    );
    todoWrapper.find('Button').simulate('click');
    expect(handleTodoDeleteClick).toHaveBeenCalledTimes(1);
  });
});
