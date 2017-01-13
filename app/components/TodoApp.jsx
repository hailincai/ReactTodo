import React from "react";
import TodoList from "TodoList";
import AddTodoForm from "AddTodoForm";
import TodoSearch from "TodoSearch";
import uuid from "node-uuid";

var TodoApp = React.createClass({
  getInitialState: function() {
    return ({
      todos: [
        {
          id: uuid(),
          text: "Walk to dog",
          completed: false
        },
        {
          id: uuid(),
          text: "Clean the yard",
          completed: true
        },
        {
          id: uuid(),
          text: "Deposit check",
          completed: true
        },
        {
          id: uuid(),
          text: "Check EOB status",
          completed: false
        }
      ],

      showCompleted: false,
      searchText: ""
    });
  },

  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} {...this.state} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleAddTodo: function(newTodoText) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodoText,
          completed: false
        }
      ]
    })
  },

  handleToggle: function(todoId) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId){
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
    });
  }
});

export default TodoApp;
