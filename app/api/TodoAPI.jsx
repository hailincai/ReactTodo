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
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filterTodos = todos;

    console.log("showCompleted:", showCompleted);
    //filter by showCompleted
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //filter by searchText
    let regExp = new RegExp(searchText, "gi");
    filterTodos = filterTodos.filter((todo) => {
      return (searchText.lenght == 0) || todo.text.match(regExp);
    });

    //sort todos with non-completed first
    filterTodos.sort((a, b) => {
      if (!a.completed && b.compldted){
        return -1; //a < b
      }else if (a.completed && !b.completed){
        return 1; // a > b
      }else{
        return 0; // a == b
      }
    });

    return filterTodos;
  }
};

export default TodoAPI;
