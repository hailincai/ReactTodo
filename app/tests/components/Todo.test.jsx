import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import {Todo} from "Todo";

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  it("should dispatch toggleTodo action with id on click", () => {
    var todoData = {id: 100, text: "test data", completed: true};
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));

    //$el[0] is the root element because our click is at div
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });
  });
})
