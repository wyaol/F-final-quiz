import React, { Component } from 'react';
import './index.scss';

class PersonButton extends Component {
  handleOnClick = () => {
    const { deleteItem } = this.props;
    deleteItem();
  };

  render() {
    const { value } = this.props;
    return (
      <div className="person-button">
        <div
          className="person-button-content"
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        >
          {value}
        </div>
        <button type="button" className="person-button-delete" onClick={this.handleOnClick}>
          x
        </button>
      </div>
    );
  }
}

export default PersonButton;
