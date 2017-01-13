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
          text: "Walk to dog"
        },
        {
          id: uuid(),
          text: "Clean the yard"
        },
        {
          id: uuid(),
          text: "Deposit check"
        },
        {
          id: uuid(),
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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: newTodoText
        }
      ]
    })
  }
});

export default TodoApp;
