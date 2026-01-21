import React, { Component } from 'react'
import { Counter } from './components/Counter'
import { Logger } from './components/Logger'
import { ClickCounter } from './components/ClickCounter'
export class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      count : 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }
  increment() {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  }
  decrement() {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  }
  render() {
    return (
      <div>
        <ClickCounter></ClickCounter>
        <h1>Counter Learning app</h1>
        <Counter count = {this.state.count} increment = {this.increment} decrement = {this.decrement}></Counter>
        <Logger count={this.state.count}></Logger>
      </div>
    )
  }
}

export default App
