import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         toggle: false
      }
    }
    setToggle = ()=>{
        this.setState({toggle : !this.state.toggle})
    }
    increaseCount = ()=>{
        if(this.state.toggle){
            this.setState({count : this.state.count +1})
        }
    }
    
  render() {
    console.log("This is a simple component")
    return (
      <div>
        <h2>Simple component</h2>
        <div>{this.state.count}</div>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.increaseCount}>Increase</button>
        
      </div>
    )
  }
}

export default SimpleComponent