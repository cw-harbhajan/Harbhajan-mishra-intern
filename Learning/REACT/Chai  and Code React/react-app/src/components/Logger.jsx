import React, { Component } from 'react'

export class Logger extends Component {
    constructor(props){
        super(props);
        console.log("Current Count:", this.props.count)
    }
    componentDidUpdate(prevProps){
        if(prevProps.count !== this.props.count){
            console.log("Current Count:", this.props.count)
        }
    }
    render(){
        return (
            <div>
                <h2>Logger Component - Check Console for count value</h2>
            </div>
        )
    }
  
}

export default Logger
