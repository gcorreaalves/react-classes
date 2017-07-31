import uuid from 'uuid';

import * as actions from '../actions';
import * as constants from '../constants';

describe('Todo Actions Tests', () => {

  test('add todo', () => {
    uuid.v1 = jest.fn().mockReturnValue(123456);

    const text = 'Buy some fruits';
    const actionExpected = {
      type: constants.ADD_TODO,
      payload: {
        uuid: 123456,
        completed: false,
        text,
      },
    };

    expect(actions.addTodo(text)).toEqual(actionExpected);
    expect(uuid.v1).toBeCalled();
  });

  test('toggle todo', () => {
    const actionExpected = {
      type: constants.TOGGLE_TODO,
      payload: {
        uuid: 123456,
      },
    };

    expect(actions.toggleTodo(123456)).toEqual(actionExpected);
  });

  test('remove todo', () => {
    const actionExpected = {
      type: constants.REMOVE_TODO,
      payload: {
        uuid: 123456,
      },
    };

    expect(actions.removeTodo(123456)).toEqual(actionExpected);
  });

  test('remove all todos', () => {
    ['', 'completed', 'active'].forEach((status) => {
      const actionExpected = {
        type: constants.REMOVE_ALL_TODOS,
        payload: {
          status,
        },
      };

      expect(actions.removeAllTodo(status)).toEqual(actionExpected);
    })
  });
});
