import React from "react";
import {connect} from "react-redux";
import actions from "actions";

export var TodoSearch = React.createClass({
  render: function() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" defaultValue={this.props.searchText} placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" defaultChecked={this.props.showCompleted}  onChange={this.handleShowCompletedChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  },

  handleShowCompletedChange: function(e) {
    var showCompleted = this.refs.showCompleted.checked;
    this.props.dispatch(actions.toggleShowCompleted());
  },

  handleSearch: function(e) {
    var searchText = this.refs.searchText.value;
    this.props.dispatch(actions.setSearchText(searchText));
  }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText,
      showCompleted: state.showCompleted
    };
  }
)(TodoSearch);
