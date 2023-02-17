import React from 'react';
function IncrementAge(CompArgument,iCustomValue){
  class NewComponent extends React.Component{
    state={
      iAge=18
    }
    beingEligble=()=>{       //Its a method in which i am simply changing state
      this.setState({iAge:this.state.iAge+iCustomValue});
    }
    render(){
      return(
        <React.Fragement>
          <CompArgument myAge={this.state.iAge} increaseAge={()=>this.beingEligble()}/>
           </React.Fragement>
      );
    }
  }
  return NewCompoenet;
} 
export default IncrementAge;