import React from "react";
import Todo from "Todo";
import TodoAPI from "TodoAPI";
import {connect} from "react-redux";

export var TodoList = React.createClass({
  render: function() {
    let {todos, showCompleted, searchText} = this.props;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    var renderTodos = () => {
      if (filterTodos.length == 0) {
        return(
          <p className="container__message">Nothing to do</p>
        );
      }else {
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
