import { combineReducers } from 'redux';

import * as ActionTypes from './ActionTypes';

const initialState = {
  visibilityFilter: ActionTypes.VisibilityFilters.SHOW_ALL,
  todos: {
    ids: [],
    todosById: {}
  }
};

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const id = state.ids.reduce((max, id) => Math.max(max, id), -1) + 1;
      const todoWithId = {
        [id]: {
          text: action.text,
          completed: false
        }
      };
      return {
        ids: state.ids.concat([id]),
        todosById: Object.assign({}, state.todosById, todoWithId)
      };

    case ActionTypes.TOGGLE_TODO:
      let todosById = Object.assign({}, state.todosById);
      todosById[action.id].completed = !state.todosById[action.id].completed;
      return {
        ids: state.ids,
        todosById: Object.assign({}, state.todosById, todosById)
      };

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;