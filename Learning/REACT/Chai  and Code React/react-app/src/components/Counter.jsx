import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Counter: {this.props.count}</h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
