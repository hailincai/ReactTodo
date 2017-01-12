import React from "react";
import Todo from "Todo";

var TodoList = React.createClass({
  render: function() {
    let {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default TodoList;
