import React from 'react';
import logo from './../logo.svg';
import './../App.css';

import Test from './Test';

class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
         <Test/>
        </div>
      </div>
    );
  }
}

export default Main;
