import React from 'react';
import './TodoCard.css';

import Icon from '../../Icon';

class TodoCard extends React.Component {
  render() {
    const { title, completed } = this.props;

    return (
      <div class="todo-card">
        {/* <CompleteIcon value={!!completed} onInput={e => this.props.onToggleCompleted(e)} /> */}
        <input
          className={title}
          value={title}
          disabled={!!completed}
          onChange={e => this.props.onTextChange(e.target.value)}
        />
        <Icon className="delete" icon="xmark" onClick={this.props.onDelete} />
      </div>
    );
  }
}

export default TodoCard;
