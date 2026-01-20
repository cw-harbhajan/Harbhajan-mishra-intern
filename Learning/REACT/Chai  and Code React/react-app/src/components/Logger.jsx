import React, { Component } from 'react'

export class Logger extends Component {
    constructor(props){
        super(props);
        console.log("Current Count:", this.props.count)
    }
  
}

export default Logger
