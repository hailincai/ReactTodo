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
      var action = {
        type: "ADD_TODO",
        text: "Walk to dogo"
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it("should toggle todo", () => {
      var todos = [
        {
          id: 1,
          text: "Walk dog",
          completed: false,
          createdAt: 100,
          completedAt: undefined
        }
      ];

      var action = {
        type: "TOGGLE_TODO",
        id: 1
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toExist();

      res = reducers.todosReducer(df(res), df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toNotExist();
    })
  });
});
