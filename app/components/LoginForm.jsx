import React from "react";
import {connect} from "react-redux";
import * as actions from "actions";

export var LoginForm = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },

  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with GitHub account below.</p>
              <button className="button" onClick={this.onLogin}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default connect()(LoginForm);
