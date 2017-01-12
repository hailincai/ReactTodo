import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import AddTodoForm from "AddTodoForm";

describe("AddTodoForm", () => {
  it("should exist", () => {
    expect(AddTodoForm).toExist();
  });

  describe("onAddTodo", () => {
    it("should call onAddTodo if input valid content", () => {
      var todoText = "abc";
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.newtodo.value = todoText;
      TestUtils.Simulate.submit($el.find("form")[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
    });

    it("should not call onAddTodo if input is invalid", () => {
      var todoText = "";
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.newtodo.value = todoText;
      TestUtils.Simulate.submit($el.find("form")[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
})
