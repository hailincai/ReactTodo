import uuid from "node-uuid";
import moment from "moment";

export var searchTextReducer = (state = "", action) => {
  switch(action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      var newState = !state;
      return newState;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODOS":
      return [
        ...state,
        ...action.todos
      ];
    case "ADD_TODO":
      return [
        ...state,
        action.todo
      ];
    case "TOGGLE_TODO":
      var updatedTodos = state.map((todo) => {
        if (todo.id === action.id) {
          var newCompleted = !todo.completed;
          return (
            {
              ...todo,
              completed: newCompleted,
              completedAt: (newCompleted) ? moment().unix() : undefined
            }
          )
        }else{
          return todo;
        }
      });

      return updatedTodos;
    default:
      return state;
  }
};

export default {
  searchTextReducer,
  showCompletedReducer,
  todosReducer
};
