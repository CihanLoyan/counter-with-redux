import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1 className={this.props.counter <= 0 ? 'red' : 'green'}>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter)
