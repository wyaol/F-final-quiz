import React, { Component } from 'react';
import './index.scss';

// TODO GTB-工程实践: - 组件命名有点不合适
class PersonButton extends Component {
  // TODO GTB-知识点: - 这里也不用创建一个新的方法
  handleOnClick = () => {
    const { deleteItem } = this.props;
    deleteItem();
  };

  render() {
    const { value } = this.props;
    return (
      <div className="person-button">
        <div
          className="person-button-content"
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        >
          {value}
        </div>
        <button type="button" className="person-button-delete" onClick={this.handleOnClick}>
          x
        </button>
      </div>
    );
  }
}

export default PersonButton;
// TODO GTB-完成度: - 删除按钮的显示状态不对
// TODO GTB-完成度: - 删除讲师/学员之后，没有更新讲师/学员列表数据
