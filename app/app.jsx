import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";

import TodoApp from "TodoApp";
import LoginForm from "LoginForm";
import TodoAPI from "TodoAPI";
import actions from "actions";
import configureStore from "configureStore";


var store = configureStore.configure();

store.dispatch(actions.startAddTodos());

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
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={LoginForm}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
