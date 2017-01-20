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
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {id: uuid(), text: action.text, completed: false,
         createdAt: moment().unix(),
         completedAt: undefined}
      ];
    case "TOGGLE_TODO":
      var updatedTodos = state.map((todo) => {
        var newTodo = {...todo};
        if (newTodo.id === action.id){
          newTodo.completed = !newTodo.completed;
          newTodo.completedAt = (newTodo.completed) ? moment().unix() : undefined;
        }

        return newTodo;
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
