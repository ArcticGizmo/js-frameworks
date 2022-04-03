import React from 'react';
import './TodoCard.css';

import Icon from '../../Icon';
import CompleteIcon from './CompleteIcon';

class TodoCard extends React.Component {
  render() {
    const { title, completed, onToggle } = this.props;

    return (
      <div className="todo-card">
        <CompleteIcon value={!!completed} onToggle={e => onToggle && onToggle(e)} />
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
