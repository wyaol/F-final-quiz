import React, { Component } from 'react';
import './index.scss';
import PersonButton from '../PersonButton';

class GroupList extends Component {
  autoGrouping = async () => {
    const { autoGrouping } = this.props;
    autoGrouping();
  };

  render() {
    const { groups, deleteTrainee, deleteTrainer } = this.props;

    return (
      // TODO GTB-知识点: - 语义化标签使用不合理，参考使用 <section> <header> <ul> <li>
      <div>
        <div className="group-title">
          <h2>分组列表</h2>
          {/* TODO GTB-知识点: - 这里直接用this.props.autoGrouping 就可以了，或者解构出来也行，但是没必要在创建一个新的方法 */}
          <button align="right" type="submit" onClick={this.autoGrouping}>
            分组学员
          </button>
        </div>
        <div className="group">
          {groups.map((group) => (
            <div className="group-item" key={group.id}>
              <div className="group-name">
                {group.name}
                <div className="group-name-trainers">
                  {group.trainers.map((trainer) => (
                    <PersonButton
                      key={trainer.id}
                      value={`${trainer.id}. ${trainer.name}`}
                      deleteItem={() => deleteTrainer(trainer.id)}
                    />
                  ))}
                </div>
              </div>
              <div className="button-list">
                {group.trainees.map((trainee) => (
                  <PersonButton
                    key={trainee.id}
                    value={`${trainee.id}. ${trainee.name}`}
                    deleteItem={() => deleteTrainee(trainee.id)}
                  />
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
