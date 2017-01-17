import React from "react";
import moment from "moment";

var Todo = React.createClass({
  render: function() {
    let {id, text, completed, createdAt, completedAt} = this.props;

    let renderDate = () => {
      var message = (completed) ? "Completed " : "Created ";
      var timestamp = (completed) ? completedAt : createdAt;

      return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
    };

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

export default Todo;
