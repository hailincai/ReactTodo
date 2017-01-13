import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import Todo from "Todo";

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  it("should call onToggle prop with id on click", () => {
    var todoData = {id: 100, text: "test data", completed: true};
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));

    //$el[0] is the root element because our click is at div
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(100);
  });
})
