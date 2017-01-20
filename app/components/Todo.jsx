import React from "react";
import moment from "moment";

import {connect} from "react-redux";
import actions from "actions";

export var Todo = React.createClass({
  render: function() {
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;

    let renderDate = () => {
      var message = (completed) ? "Completed " : "Created ";
      var timestamp = (completed) ? completedAt : createdAt;

      return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
    };

    let todoClassName = (completed) ? "todo todo__completed" : "todo";

    return (
      <div className={todoClassName} onClick={() => {
        //this.props.onToggle(id);
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type="checkbox" defaultChecked={completed}/>
        </div>

        <div>
          <p>{text}</p>
          <p className="todo_subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
