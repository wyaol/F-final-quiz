import React, { Component } from 'react';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  onKeyDown = async (event) => {
    if (event.keyCode === 13) {
      const { addPerson } = this.props;
      addPerson(event.target.value);
      this.setState({
        isEditing:false
      })
    }
  };

  render() {
    const { title, persons } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div>
          {persons.map((person) => (
            <div key={person.id} className="person-button">
              {person.id}. {person.name}
            </div>
          ))}
          {this.state.isEditing ? (
            <input
              className="person-button"
              id="add-person"
              type="text"
              onKeyDown={this.onKeyDown}
            />
          ) :  (
            <button
              type="button"
              onClick={() => this.setState({ isEditing: true })}
              className="person-button"
            >
              + 添加成员
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default PersonList;
