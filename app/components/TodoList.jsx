import React from "react";
import Todo from "Todo";
import {connect} from "react-redux";

export var TodoList = React.createClass({
  render: function() {
    let {todos} = this.props;

    var renderTodos = () => {
      if (todos.length == 0) {
        return(
          <p className="container__message">Nothing to do</p>
        );
      }else {
        return todos.map((todo) => {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
