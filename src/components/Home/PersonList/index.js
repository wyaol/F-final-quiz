import React, { Component } from 'react';
import PersonButton from '../PersonButton';

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
        isEditing: false,
      });
    }
  };

  render() {
    const { title, persons, deleteItem } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div className="button-list">
          {persons.map((person) => (
            <PersonButton
              key={person.id}
              value={`${person.id}. ${person.name}`}
              deleteItem={() => deleteItem(person.id)}
            />
          ))}
          {this.state.isEditing ? (
            <div className="person-button">
              <input
                className="person-button-content"
                id="add-person"
                type="text"
                onKeyDown={this.onKeyDown}
              />
            </div>
          ) : (
            <div className="person-button">
              <button
                type="button"
                onClick={() => this.setState({ isEditing: true })}
                className="person-button-content"
              >
                + 添加成员
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PersonList;
// TODO GTB-知识点: * 建议将addPerson抽取单独组件, html注意语义化标签的使用
