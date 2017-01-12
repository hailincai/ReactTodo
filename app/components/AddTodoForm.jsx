import React from "react";

var AddTodoForm = React.createClass({
  propTypes: function(){
    return(
      {
        onAddTodo: React.PropTypes.func.isRequired
      }
    )
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="newtodo" type="text" placeholder="What do you need to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var newTodoText = this.refs.newtodo.value;
    if (typeof newTodoText === "string" && newTodoText.length > 0){
      this.refs.newtodo.value = "";
      this.props.onAddTodo(newTodoText);
    }else{
      this.refs.newtodo.focus();
    }
  }
});

export default AddTodoForm;
