import React from "react";
import Todo from "Todo";

var TodoList = React.createClass({
  render: function() {
    let {todos} = this.props;

    var renderTodos = () => {
      if (todos.length == 0) {
        return(
          <p className="container__message">Nothing to do</p>
        );
      }else {
        return todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

export default TodoList;
