import React, { Component } from 'react';
import './index.scss';

class PersonButton extends Component {

  render() {
    const { value } = this.props;
    return (
      <div className="person-button">
        { value }
      </div>
    );
  }
}

export default PersonButton;
