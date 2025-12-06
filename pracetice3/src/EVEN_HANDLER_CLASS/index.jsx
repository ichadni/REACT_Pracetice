import React, { Component } from 'react'

 class EVEN_HANDLER_CLASS  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedvaLue:''
      }
    }
    
    handleonchange=(e)=>{
        
        this.setState({changedvaLue : e.target.value},()=>{
            console.log(this.state.changedvaLue);
        })
    }
  render() {
    
    return (
      <div>
        <input type="text" onChange={this.handleonchange}/>
        <p>{this.state.changedvaLue}</p>
              </div>
    )
  }
}
export default EVEN_HANDLER_CLASS
