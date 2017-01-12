import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import TodoList from "TodoList";
import Todo from "Todo";

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each to do item", () => {
    let todos = [
      {
        id: 1,
        text: "Walk to dog"
      },
      {
        id: 2,
        text: "Clean the yard"
      },
      {
        id: 3,
        text: "Deposit check"
      },
      {
        id: 4,
        text: "Check EOB status"
      }
    ];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    
    expect(todoComponents.length).toBe(todos.length);
  })
});
