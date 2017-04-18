// Dependencies
import React from 'react';

class IronLander extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default IronLander;
