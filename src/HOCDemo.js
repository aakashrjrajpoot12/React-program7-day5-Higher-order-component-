import React from 'react';
import ClickCounter from './ClickCounter';
import MouseOverEvent from './MouseOverEvent';

class HOCDemo extends React.Component{
  render(){
    return(
       <React.Fragement>
         <ClickCounter/>
         <MouseOverEvent />
          </React.Fragement>
    );
  }
}
export default HOCDemo;
