import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";

import TodoApp from "TodoApp";
import TodoAPI from "TodoAPI";
import actions from "actions";
import configureStore from "configureStore";



var store = configureStore.configure();
store.subscribe(() => {
  var state = store.getState();
  console.log("New State", state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation-sites
//style! inject style in html
//css! load css file
//require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

require("style!css!sass!applicationStyles");

//using createClass method,
//the method in the component are automatically bound to component itself
ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);
