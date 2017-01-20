import React from "react";
import ReactDOM from "react-dom";
import expect from "expect";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";

import {AddTodoForm} from "AddTodoForm";

describe("AddTodoForm", () => {
  it("should exist", () => {
    expect(AddTodoForm).toExist();
  });

  describe("onAddTodo", () => {
    it("should dispatch ADD_TODO if input valid content", () => {
      var todoText = "abc";
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.newtodo.value = todoText;
      TestUtils.Simulate.submit($el.find("form")[0]);

      expect(spy).toHaveBeenCalledWith({
        type: "ADD_TODO",
        text: todoText
      });
    });

    it("should not dispatch ADD_TODO if input is invalid", () => {
      var todoText = "";
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.newtodo.value = todoText;
      TestUtils.Simulate.submit($el.find("form")[0]);

      expect(spy).toNotHaveBeenCalled();
    });
  });
})
