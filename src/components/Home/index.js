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
    // TODO GTB-知识点: + 状态提升到APP, 数据管理合理
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
    // TODO GTB-知识点: - 这三个异步请求没有依赖关系，可以分别请求数据然后分别setState，这样写成同步的去请求数据，如果有多个网络请求，或者网络比较慢的时候会导致数据一直无法刷新
  }

  addTrainee = async (name) => {
    const trainee = await addTrainee(name);
    this.setState((prev) => prev.trainees.push(trainee));
    // TODO GTB-知识点: -  添加、删除数据之后，最好还是从后端重新获取一次数据
  };

  addTrainer = async (name) => {
    const trainer = await addTrainer(name);
    this.setState((prev) => prev.trainers.push(trainer));
  };

  autoGrouping = async () => {
    // TODO GTB-工程实践: - 方法命名最好不要一样，即便不在同一个文件
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
// TODO GTB-工程实践: + 合理小步提交
// TODO GTB-完成度: * 功能几乎全部实现，小部分功能存在bug或不完善
// TODO GTB-综合: * 总的来说完成度较高，注意工程实践
