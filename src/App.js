import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Testing to implement some react hooks technique. Hot reload working? 
        </p>
        <br></br>
        <p className="App-intro">
          why is hot reload not working now? Need to update somehow? lol only need to add a .env file for VM 
        </p>
      </div>
    );
  }
}

export default App;


