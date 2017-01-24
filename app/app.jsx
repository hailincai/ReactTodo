import React from "react";
import ReactDOM from "react-dom";
import {hashHistory} from "react-router";
import {Provider} from "react-redux";
import firebase from "app/firebase/index";

import actions from "actions";
import configureStore from "configureStore";
import router from "app/router/index";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push("/todos");
  }else{
    store.dispatch(actions.logout());
    hashHistory.push("/");
  }
});

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
    {router}
  </Provider>,
  document.getElementById("app")
);
