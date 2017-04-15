import React from 'react';
// import logo from './../logo.svg';
// import './../App.css';

// Rendering all elements inside the Main wrapper with props and dispatch function included.

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
