import React from "react";
import {connect} from "react-redux";
import actions from "actions";

export var AddTodoForm = React.createClass({
  propTypes: function(){
    return(
      {
        onAddTodo: React.PropTypes.func.isRequired
      }
    )
  },

  render: function() {
    return(
      <div className="container__footer">
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
      this.props.dispatch(actions.startAddTodo(newTodoText));
    }else{
      this.refs.newtodo.focus();
    }
  }
});

export default connect()(AddTodoForm);
