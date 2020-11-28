import React, { Component } from 'react';
import './index.css';

class GroupList extends Component {

  autoGrouping = async () => {
    const { autoGrouping } = this.props;
    autoGrouping();
  };

  render() {
    const { groups } = this.props;

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
                <div>
                  {group.trainers.map((trainer) => (
                    <div key={trainer.id}>
                      {trainer.id}. {trainer.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {group.trainees.map((trainee) => (
                  <div className="person-button" key={trainee.id}>
                    {trainee.id}. {trainee.name}
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
