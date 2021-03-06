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

  it("should generate the login action", () => {
    var action = {type: "LOGIN", uid: "abcde"};

    var res = actions.login(action.uid);
    expect(res).toEqual(action);
  });

  it("should generate the logout action", () => {
    var action = {type: "LOGOUT"};

    var res = actions.logout();
    expect(res).toEqual(action);
  });

  describe("Tests with firebase todos", () => {
    var testTodoRef;
    var todoText = "test_todo_task";
    var uid;
    var todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then(
        (user) => {
          uid = user.uid;
          todosRef = firebaseRef.child(`users/${uid}/todos`);
          return todosRef.remove();
        }
      ).then(() => {
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text: todoText,
          completed: false,
          createdAt: 123
        });
      }).then(() => done())
        .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done()).catch(done);
    });

    it("should create todo and dispatch ADD_TODO", (done) => {
      const store = createMockStore({auth: {uid: uid}});
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

    it("should toggle todo and dispatch UPDATE_TOD action", (done) => {
      const store = createMockStore({auth: {uid: uid}});
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
    });

    it("should get one todo back when call startAddTodos", (done) => {
      const store = createMockStore({auth: {uid: uid}});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: "ADD_TODOS"
        });

        expect(mockActions[0].todos.length).toBe(1);
        expect(mockActions[0].todos[0].text).toEqual(todoText);
        expect(mockActions[0].todos[0].id).toEqual(testTodoRef.key);
        done();
      }).catch(done);
    })
  });
});
