import React, { Component } from 'react';
import PersonList from './PersonList';
import GroupList from './GroupList';
import './index.css';
import { getTraineesNotGrouped, addTrainee } from '../../actions/traineeAction';
import { getTrainersNotGrouped, addTrainer } from '../../actions/trainerAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      trainers: []
    };
  }

  async componentDidMount() {
    const trainees = await getTraineesNotGrouped();
    const trainers = await getTrainersNotGrouped();
    this.setState({
      trainees,
      trainers
    })
  }

  addTrainee = async (name) => {
    const trainee = await addTrainee(name);
    this.setState(prev => prev.trainees.push(trainee));
  }

  addTrainer = async (name) => {
    const trainer = await addTrainer(name);
    this.setState(prev => prev.trainers.push(trainer));
  }

  render() {
    return (
      <div className="container">
        <GroupList />
        <PersonList
          title="讲师列表"
          persons={this.state.trainers}
          addPerson={this.addTrainer} />
        <PersonList 
          persons={this.state.trainees}
          title="学员列表" 
          addPerson={this.addTrainee} />
      </div>
    );
  }
}

export default Home;
