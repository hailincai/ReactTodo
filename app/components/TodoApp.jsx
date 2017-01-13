import React from "react";
import TodoList from "TodoList";
import AddTodoForm from "AddTodoForm";
import TodoSearch from "TodoSearch";

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
        <TodoList todos={todos} {...this.state}/>
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
    alert("new todo: " + newTodoText);
  }
});

export default TodoApp;
