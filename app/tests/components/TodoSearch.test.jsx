import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import TestUtils from "react-addons-test-utils";
import expect from "expect";

import ConnectedTodoSearch, {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  describe("onSearch", () => {
    it("should dispatch SET_SEARCH_TEXT with entered input text", () => {
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
      var $el = ReactDOM.findDOMNode(todoSearch);
      var searchText = "abc";

      todoSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchText);

      expect(spy).toHaveBeenCalledWith({
        type: "SET_SEARCH_TEXT",
        searchText: searchText
      });
    });

    it("should dispatch TOGGLE_SHOW_COMPLETED with proper checked value", () => {
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
      var $el = ReactDOM.findDOMNode(todoSearch);

      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);

      expect(spy).toHaveBeenCalledWith({type: "TOGGLE_SHOW_COMPLETED"});
    })
  })
})
