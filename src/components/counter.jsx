import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };


  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const {count} = this.state;
    //if else statement as a ternary statement.
    //looked like this return this.state.count === 0 ? 'Zero' : this.state.count;
    //or
    //if(this.state.count === 0) {
    // return 'Zero';  
    //} else {
    // return this.state.count;  
    //}
    return count === 0 ? 'Zero' : count;
    
  
  }
}

export default Counter;
