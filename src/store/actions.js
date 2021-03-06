import * as ActionTypes from './action-types';

export function addTodo(text) {
  return {
    type: ActionTypes.ADD_TODO,
    text
  };
}

export function toggleTodo(id) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
}

export function deleteTodo(id) {
  return {
    type: ActionTypes.DELETE_TODO,
    id
  };
}

export function completeAll() {
  return {
    type: ActionTypes.COMPLETE_ALL
  };
}

export function clearCompleted() {
  return {
    type: ActionTypes.CLEAR_COMPLETED
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  };
}
