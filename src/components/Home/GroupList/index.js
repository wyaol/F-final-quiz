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
      <div>
        <div className="group-title">
          <h2>分组列表</h2>
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
