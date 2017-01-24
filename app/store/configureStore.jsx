import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from "reducers";
import thunk from "redux-thunk";

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

export default {
  configure
}
