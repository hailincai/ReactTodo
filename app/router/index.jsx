import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import firebase from "app/firebase/index";
import TodoApp from "TodoApp";
import LoginForm from "LoginForm";

// this is middleware for Route module
// next is the next middleware in the chains
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace("/");
  }

  next();
};

var redirectIfLogin = (nextState, replace, next) => {
  if (firebase.auth().currentUser){
    replace("/todos");
  }

  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" onEnter={redirectIfLogin}>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={LoginForm} onEnter={redirectIfLogin}/>
    </Route>
  </Router>
)
