import expect from "expect";
import actions from "actions";

describe("Actions", () => {
  it("should generate search text action", () => {
    var searchText = "Some search text";
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: searchText
    };

    var actualAction = actions.setSearchText(searchText);
    expect(actualAction).toEqual(action);
  });

  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      text: "some todo"
    };

    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it("should generate toggle show completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it("should generate toggleTodo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: 1
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it("should generate ADD_TODOS action", () => {
    var todos = [{
      id: 1,
      text: "abc"
    }];
    var action = {
      type: "ADD_TODOS",
      todos: todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);    
  })
});
