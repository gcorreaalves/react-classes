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

const removeTodo = (todos, uuid) => todos.filter(todo => todo.uuid !== uuid);

const removeAllTodo = (todos, status) => {
  if (status === 'completed') return todos.filter(todo => !todo.completed);
  if (status === 'active') return todos.filter(todo => todo.completed);
  return [];
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
      return removeAllTodo(state, action.payload.status);
    default:
      return state;
  }
};

export const todoFilterReducer = (state = 'ALL', action) => {
  const filters = ['COMPLETED', 'ACTIVE'];
  switch (action.type) {
    case FILTER_TODOS:
      if (!action.hasOwnProperty('payload') || 
          !action.payload.hasOwnProperty('filter') || 
          filters.indexOf(action.payload.filter) === -1) {
        return 'ALL';
      }
      return action.payload.filter;
    default:
      return state ? state : 'ALL';
  }
};
