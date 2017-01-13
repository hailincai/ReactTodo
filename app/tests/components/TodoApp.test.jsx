import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
import uuid from "node-uuid";

import TodoApp from "TodoApp";

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  it("should add todo to the todos state on handleAddTodo", () => {
    var todoText = "test test";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it("should toggle completed value when handleToggle is called", () => {
    var todos = [{id: uuid(), text: "test todo", completed: false}];
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: todos});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  })
})
