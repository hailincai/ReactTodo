import React from "react";
import Todo from "Todo";
import TodoAPI from "TodoAPI";
import {connect} from "react-redux";

export var TodoList = React.createClass({
  render: function() {
    let {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length == 0) {
        return(
          <p className="container__message">Nothing to do</p>
        );
      }else {
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return filterTodos.map((todo) => {
          return <Todo key={todo.id} {...todo}/>
        });
      }
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
