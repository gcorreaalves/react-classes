import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODOS,
  FILTER_TODOS,
} from './constants';

const addTodo = todo => ({
  uuid: todo.uuid,
  text: todo.text,
  completed: todo.completed,
});

const toggleTodo = (todos, uuid) => {
  return todos.map((todo) => {
    if (todo.uuid === uuid) {
      todo.completed = !todo.completed;
    }

    return todo;
  });
};

const removeTodo = (todos, uuid) => {
  return todos.filter((todo) => {
    if (todo.uuid !== uuid) {
      return todo;
    }
  });
};

export const todoReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      return [...state, addTodo(action.payload)];
    case TOGGLE_TODO:
      newState = toggleTodo(state, action.payload.uuid);
      return [...newState];
    case REMOVE_TODO:
      newState = removeTodo(state, action.payload.uuid);
      return [...newState];
    case REMOVE_ALL_TODOS:
      return [];
    default:
      return state;
  }
};

export const todoFilterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case FILTER_TODOS:
      return action.payload.filter;
    default:
      return state;
  }
};
