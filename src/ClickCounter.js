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
        //React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
    );
  }
}
export default IncrementAge(Clickcounter,5);