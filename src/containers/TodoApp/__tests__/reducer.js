import * as constants from '../constants';
import * as reducer from '../reducer';

describe('Todo Reducer Tests', () => {
  let todos;

  beforeEach(() => {
    todos = [{
      uuid: 'a1b2c3',
      text: 'Buy some fruits',
      completed: false,
    },
    {
      uuid: 'd4e5f6',
      text: 'Wash the car',
      completed: false,
    }];
  });

  test('reducer should return the default state if it doesn\'t recognize the action type', () => {
    const action = {
      type: 'UNKNOWN',
      payload: {},
    };
    const newTodoList = reducer.todoReducer(todos, action);
    expect(newTodoList).toEqual(todos);
  });

  test('A task should be add to a todo list', () => {
    const action = {
      type: constants.ADD_TODO,
      payload: {
        uuid: 'g7h8i9',
        text: 'Cut the grass',
      },
    };
    const newTodoList = reducer.todoReducer(todos, action);
    expect(newTodoList.length).toBe(3);
  });

  test('A task should have its status toggled', () => {
    const action = {
      type: constants.TOGGLE_TODO,
      payload: {
        uuid: 'a1b2c3',
      },
    };

    let compltedTodoList = reducer.todoReducer(todos, action);
    const completedTotal = compltedTodoList.filter(todo => todo.completed).length;
    expect(completedTotal).toBe(1);

    const activeTodoList = reducer.todoReducer(compltedTodoList, action);
    const activeTotal = activeTodoList.filter(todo => !todo.completed).length;
    expect(activeTotal).toBe(2);
  });

  test('A task should be removed from a todo list', () => {
    const action = {
      type: constants.REMOVE_TODO,
      payload: {
        uuid: 'a1b2c3',
      },
    };

    const newTodoList = reducer.todoReducer(todos, action);
    expect(newTodoList.length).toBe(1);
  });

  test('All tasks should be removed from a todo list', () => {
    const action = {
      type: constants.REMOVE_ALL_TODOS,
      payload: {},
    };

    const newTodoList = reducer.todoReducer(todos, action);
    expect(newTodoList.length).toBe(0);
  });

  test('All completed tasks should be removed from a todo list', () => {
    const action = {
      type: constants.REMOVE_ALL_TODOS,
      payload: {
        status: 'completed',
      },
    };

    todos[0].completed = true;

    const newTodoList = reducer.todoReducer(todos, action);
    expect(newTodoList.length).toBe(1);
  });

  test('The todo list should be able to filter by status', () => {
    const action = {
      type: constants.FILTER_TODOS,
    };
    expect(reducer.todoFilterReducer('', action)).toBe('ALL');
    expect(reducer.todoFilterReducer('UNKNOWN', action)).toBe('ALL');
  });

  test('The todo list default filter should be state passed or ALL', () => {
    const action = {
      type: 'UNKNONW',
    };
    expect(reducer.todoFilterReducer(null, action)).toBe('ALL');
    expect(reducer.todoFilterReducer('', action)).toBe('ALL');
    expect(reducer.todoFilterReducer('UNKNOWN', action)).toBe('UNKNOWN');
  });

  test('The todo list should be able to filter by completed/active/all', () => {
    const filters = ['ALL', 'COMPLETED', 'ACTIVE'];
    filters.forEach((filter) => {
      const action = {
        type: constants.FILTER_TODOS,
        payload: {
          filter,
        },
      };
      expect(reducer.todoFilterReducer(filter, action)).toBe(filter);
    });
  });
});
