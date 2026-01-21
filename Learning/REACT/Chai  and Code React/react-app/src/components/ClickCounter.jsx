import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
        this.increment = this.increment.bind(this);
    }

    increment = ()=>{
        this.setState((prevState)=>{return {count: prevState.count + 1}})
        console.log("Button clicked", this.state.count + 1, "times");
    }
  render() {
    return (
      <div>

        <button onClick = {this.increment}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ClickCounter
