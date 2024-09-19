import React, { Component, PureComponent } from 'react'

class PureComponents extends PureComponent {
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
    console.log("This is a pure component")
    return (
      <div>
        <h2>Pure component</h2>
        <div>{this.state.count}</div>
        <button onClick={this.setToggle}>Set Toggle</button>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    )
  }
}

export default PureComponents