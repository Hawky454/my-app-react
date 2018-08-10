import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the beginning of the beginning!</h1>
        </header>
        <p className="App-intro">
          Now I have to figure out how to fucking work this shit. Does this automatically update? Well... does it?
        </p>
      </div>
    );
  }
}

export default App;
