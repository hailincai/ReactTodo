import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import TodoApp from "TodoApp";

//load foundation-sites
//style! inject style in html
//css! load css file
//require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

require("style!css!sass!applicationStyles");

//using createClass method,
//the method in the component are automatically bound to component itself
ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app")
);
