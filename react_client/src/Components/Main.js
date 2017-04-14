import React from 'react';
import logo from './../logo.svg';
import './../App.css';

// Rendering all elements inside the Main wrapper with props and dispatch function included.

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
