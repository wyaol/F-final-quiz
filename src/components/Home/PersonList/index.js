import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      isEditing: false,
    };
  }

  componentDidMount() {
    this.getPersons();
  }

  getPersons = () => {
    axios.get('http://127.0.0.1:8080/students').then((response) => {
      this.setState({
        persons: response.data,
      });
    });
  };

  isEditing = (name) => {
    axios.post('http://127.0.0.1:8080/students', { name }).then(() => {
      this.getPersons();
      this.setState({
        isEditing: false,
      });
    });
  };

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div>
          {this.state.persons.map((person) => (
            <div key={person.id} className="person-button">
              {person.id}:{person.name}
            </div>
          ))}
          {this.state.isEditing ? (
            <input
              className="person-button"
              id="add-person"
              type="text"
              onBlur={(e) => this.isEditing(e.target.value)}
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
