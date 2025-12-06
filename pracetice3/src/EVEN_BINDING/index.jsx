import React, { Component } from 'react'
 class EVEN_BINDING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handler(){
        this.setState({count:this.state.count+1})
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handler.bind(this)}>increase</button>
      </div>
    )
  }
}
export default EVEN_BINDING
