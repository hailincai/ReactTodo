import React from "react";
import TodoList from "TodoList";
import AddTodoForm from "AddTodoForm";

var TodoApp = React.createClass({
  getInitialState: function() {
    return ({
      todos: [
        {
          id: 1,
          text: "Walk to dog"
        },
        {
          id: 2,
          text: "Clean the yard"
        },
        {
          id: 3,
          text: "Deposit check"
        },
        {
          id: 4,
          text: "Check EOB status"
        }
      ]
    });
  },

  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  },

  handleAddTodo: function(newTodoText) {
    alert("new todo: " + newTodoText);
  }
});

export default TodoApp;
