import React from "react";

var Todo = React.createClass({
  render: function() {
    let {id, text, completed} = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed}/>
        {text}
      </div>
    )
  }
});

export default Todo;
