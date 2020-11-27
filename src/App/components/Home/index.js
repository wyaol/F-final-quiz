import React, { Component } from 'react';
import PersonList from '../PersonList';
import GroupList from '../GroupList';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <GroupList />
        <PersonList />
      </div>
    );
  }
}

export default Home;
