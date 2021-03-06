import expect from "expect";
//import in this way, reducers will be the export default variable
import reducers from "reducers";
import df from "deep-freeze-strict";

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "dog"
      };

      var res = reducers.searchTextReducer(df(""), df(action));
      expect(res).toEqual(action.searchText);
    })
  });

  describe("showCompletedReducer", () => {
    it("should toggle the showCompleted flag", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBe(true);
      res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toBe(false);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
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

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });

    it("should add existing todos", () => {
      var todos = [{
        id: 1,
        text: "abc",
        completed: false,
        completedAt: undefined,
        createdAt: 120
      }];
      var action = {
        type: "ADD_TODOS",
        todos: todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it("should wipe todos on logout", () => {
      var todos = [{
        id: 1,
        text: "abc",
        completed: false,
        completedAt: undefined,
        createdAt: 120
      }];
      var action = {
        type: "LOGOUT"
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(0);
    });

    it("should update todo", () => {
      var todos = [
        {
          id: 1,
          text: "Walk dog",
          completed: false,
          createdAt: 100,
          completedAt: undefined
        }
      ];

      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: "UPDATE_TODO",
        id: todos[0].id,
        updates: updates
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    })
  });

  describe("authReducer", () => {
    it("should create auth for LOGIN action", () => {
      var action = {type: "LOGIN", uid: "12345"};
      var expectRes = {uid: "12345"};

      var res = reducers.authReducer(df({}), df(action));
      expect(res).toEqual(expectRes);
    });

    it("should remove auth for LOGOUT action", () => {
      var action = {type: "LOGOUT"};
      var expectRes = {};
      var input = {uid: "12345"};

      var res = reducers.authReducer(df(input), df(action));
      expect(res).toEqual(expectRes);
    });
  });
});
