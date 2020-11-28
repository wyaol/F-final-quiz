import React, { Component } from 'react';
import PersonList from './PersonList';
import GroupList from './GroupList';
import './index.css';
import { getTraineesNotGrouped, addTrainee, deleteTrainee } from '../../actions/traineeAction';
import { getTrainersNotGrouped, addTrainer, deleteTrainer } from '../../actions/trainerAction';
import { getGroups, autoGrouping } from '../../actions/groupAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      trainers: [],
      groups: [],
    };
  }

  async componentDidMount() {
    const groups = await getGroups();
    const trainees = await getTraineesNotGrouped();
    const trainers = await getTrainersNotGrouped();
    this.setState({
      trainees,
      trainers,
      groups,
    });
  }

  addTrainee = async (name) => {
    const trainee = await addTrainee(name);
    this.setState((prev) => prev.trainees.push(trainee));
  };

  addTrainer = async (name) => {
    const trainer = await addTrainer(name);
    this.setState((prev) => prev.trainers.push(trainer));
  };

  autoGrouping = async () => {
    const groups = await autoGrouping();
    this.setState({ groups });
    const trainees = await getTraineesNotGrouped();
    const trainers = await getTrainersNotGrouped();
    this.setState({
      trainees,
      trainers,
    });
  };

  render() {
    return (
      <div className="container">
        <GroupList
          groups={this.state.groups}
          autoGrouping={this.autoGrouping}
          deleteTrainee={deleteTrainee}
          deleteTrainer={deleteTrainer}
        />
        <PersonList
          title="讲师列表"
          persons={this.state.trainers}
          addPerson={this.addTrainer}
          deleteItem={deleteTrainer}
        />
        <PersonList
          persons={this.state.trainees}
          title="学员列表"
          addPerson={this.addTrainee}
          deleteItem={deleteTrainee}
        />
      </div>
    );
  }
}

export default Home;
