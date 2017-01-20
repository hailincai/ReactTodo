import {combineReducers, createStore, compose} from "redux";
import {searchTextReducer, showCompletedReducer, todosReducer} from "reducers";
import thunk from "redux-thunk";

export var configure = () => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

export default {
  configure
}
