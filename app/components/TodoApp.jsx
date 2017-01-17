import React from "react";
import uuid from "node-uuid";

import TodoList from "TodoList";
import AddTodoForm from "AddTodoForm";
import TodoSearch from "TodoSearch";
import TodoAPI from "TodoAPI";

var TodoApp = React.createClass({
  getInitialState: function() {
    return ({
      todos: TodoAPI.getTodos(),

      showCompleted: false,
      searchText: ""
    });
  },

  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
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
