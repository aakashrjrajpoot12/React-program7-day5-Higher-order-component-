import React from 'react';
import IncrementAge from './IncrementAge';
class Clickcounter extends React.Component{
  render(){
    return(
      <React.Fragment>
        <button onclick={()=> this.props.increaseAge()}>
          My Age {this.props.myAge}
          </button>
        </React.Fragment>
    );
  }
}
export default IncrementAge(Clickcounter,5);