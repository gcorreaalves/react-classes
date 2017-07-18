import { v1 as uuidV1 } from 'uuid';

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODOS,
  FILTER_TODOS,
} from './constants';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    uuid: uuidV1(),
    text,
    completed: false,
  },
});

export const toggleTodo = uuid => ({
  type: TOGGLE_TODO,
  payload: {
    uuid,
  },
});

export const removeTodo = uuid => ({
  type: REMOVE_TODO,
  payload: {
    uuid,
  },
});

export const removeAllTodo = () => ({
  type: REMOVE_ALL_TODOS,
  payload: {},
});

export const filterTodo = filter => ({
  type: FILTER_TODOS,
  payload: {
    filter,
  },
});
