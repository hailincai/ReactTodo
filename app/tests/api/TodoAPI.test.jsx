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
});
