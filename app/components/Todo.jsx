import React from "react";

var Todo = React.createClass({
  render: function() {
    let {id, text} = this.props;

    return (
      <div>
        {id}.&nbsp;{text}
      </div>
    )
  }
});

export default Todo;
