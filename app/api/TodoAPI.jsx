import $ from "jquery";

var TodoAPI = {
  setTodos: function(todos) {
    if ($.isArray(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    var stringTodos = localStorage.getItem("todos");
    var todos = undefined;

    try{
      todos = JSON.parse(stringTodos);
    }catch(e){
      todos = [];
    }

    return ($.isArray(todos) ? todos : []);
  }
};

export default TodoAPI;
