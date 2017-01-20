import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
import {Provider} from "react-redux";

import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from "Todo";
import {configure} from "configureStore";

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each to do item", () => {
    let todos = [
      {
        id: 1,
        text: "Walk to dog",
        completed: false,
        completedAt: undefined,
        createAt: 500
      },
      {
        id: 2,
        text: "Clean the yard",
        completed: false,
        completedAt: undefined,
        createAt: 500
      }
    ];

    //change to use Provider is because todo using connect to get dispatch method
    //without provider, it will not work
    var store = configure({
      todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todoComponents.length).toBe(todos.length);
  });
  
  it("should render empty message if not todo", () => {
    let todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  })
});
