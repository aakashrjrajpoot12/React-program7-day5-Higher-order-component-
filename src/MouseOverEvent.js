import React from 'react';
import IncrementAge from './IncrementAge';
  class MouseOverEvent extends React.Component{
    
    render(){
      return(
        <React.Fragement>
          <p onMouseOver={()=> this.props.increaseAge()}>
            I am becoming Eligible{this.props.myAge} 
            </p>
           </React.Fragement>
           //Here CompArgument=Clickcounter,iCustomValue=5) compare from Clickcounter.js last line

      );
    }
  }
export default IncrementAge(MouseOverEvent,3);