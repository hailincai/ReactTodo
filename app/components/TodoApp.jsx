import React from "react";
import uuid from "node-uuid";
import moment from "moment";

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
    let {todos, showCompleted, searchText} = this.state;

    let filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodoForm onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }
});

export default TodoApp;
