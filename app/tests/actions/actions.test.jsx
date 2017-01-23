import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import actions from "actions";

var createMockStore = configureMockStore([thunk]);

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
    var todo = {
      id: 1,
      text: "some todo",
      completed: false,
      createdAt: 120,
      completedAt: null
    };
    var action = {
      type: "ADD_TODO",
      todo: todo
    };

    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it("should create todo and dispatch ADD_TODO", (done) => {
    const store = createMockStore({});
    const todoText = "something todo";

    store.dispatch(actions.startAddTodo(todoText)).then(
      () => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: "ADD_TODO"
        });
        expect(actions[0].todo).toInclude({
          text: todoText
        });
        done();
      }
    ).catch(done);
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
