import expect from "expect";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import actions from "actions";
import firebase, {firebaseRef} from "app/firebase/index";

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

  it("should generate toggle show completed action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it("should generate updateTodo action", () => {
    var action = {
      type: "UPDATE_TODO",
      id: 1,
      updates: {completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);
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

  describe("Tests with firebase todos", () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child("todos").push();

      testTodoRef.set({
        text: "something todo",
        completed: false,
        createdAt: 123
      }).then(() => {
        done();
      }).catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done()).catch(done);
    });

    it("should toggle todo and dispatch UPDATE_TOD action", (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: "UPDATE_TODO",
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }).catch(done);
    })
  });
});
