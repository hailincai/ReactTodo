import TodoAPI from "TodoAPI";
import expect from "expect";

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });

  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    it("should set valid todos array", () => {
      var todos = [{id: 1, text: "test todo", completed: false}];
      TodoAPI.setTodos(todos);

      var savedTodos = JSON.parse(localStorage.getItem("todos"));

      expect(savedTodos).toEqual(todos);
    });

    it("should not set invalid todos array", () => {
      var badTodos = {a: "b"};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem("todos")).toBe(null);
    });
  });

  describe("getTodos", () => {
    it("should return empty array for bad localStorage data", () => {
      var todos = TodoAPI.getTodos();

      expect(todos).toEqual([]);
    });

    it("should return todos if valid array in localStorage", () => {
      var todos = [{id: 1, text: "test todo", completed: false}];
      localStorage.setItem("todos", JSON.stringify(todos));

      var savedTodos = TodoAPI.getTodos();
      expect(savedTodos).toEqual(todos);
    });
  });

  describe("filterTodos", () => {
    var todos = [
      {
        id: 1,
        text: "some text here",
        completed: true
      },
      {
        id: 2,
        text: "other text here",
        completed: false
      },
      {
        id: 3,
        text: "some text here",
        completed: true
      }
    ];

    it("should have all todos if showCompleted is true", () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, "");

      expect(filterTodos.length).toBe(3);
    });

    it("should hide completed todos if showCompleter is false", () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, "");

      expect(filterTodos.length).toBe(1);
    });

    it("should sort not completed todo first", () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, "");

      expect(filterTodos[0].completed).toBe(false);
      expect(filterTodos[0].id).toBe(2);
    });

    it("should only return todos match the searchText", () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, "other");
      expect(filterTodos.length).toBe(1);

      filterTodos = TodoAPI.filterTodos(todos, true, "some");
      expect(filterTodos.length).toBe(2);

      filterTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filterTodos.length).toBe(3);      
    });
  });
});
