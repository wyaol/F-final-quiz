import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  componentDidMount() {
    this.getGroups();
  }

  group = () => {
    axios.post('http://127.0.0.1:8080/groups');
    this.getGroups();
  };

  getGroups = () => {
    axios.get('http://127.0.0.1:8080/groups').then((response) => {
      if (response.data != null) {
        this.setState({
          groups: response.data,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="group-title">
          <h2>分组列表</h2>
          <button align="right" type="submit" onClick={() => this.group()}>
            分组学员
          </button>
        </div>
        <div className="group">
          {this.state.groups.map((group) => (
            <div className="group-item" key={group.groupName}>
              <div className="group-name">{group.groupName}</div>
              <div>
                {group.students.map((student) => (
                  <div className="person-button" key={student.id}>
                    {student.id}: {student.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupList;
