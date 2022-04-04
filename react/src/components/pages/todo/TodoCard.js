import React from 'react';
import './TodoCard.css';

import Icon from '../../Icon';
import CompleteIcon from './CompleteIcon';

class TodoCard extends React.Component {
  render() {
    const { title, completed, onToggle, onTextChange, onDelete } = this.props;
    return (
      <div className="todo-card">
        <CompleteIcon value={!!completed} onToggle={e => onToggle(e)} />
        <input
          className="title"
          value={title}
          disabled={!!completed}
          onChange={e => onTextChange && onTextChange(e.target.value)}
        />
        <Icon className="delete" icon="xmark" onClick={onDelete} />
      </div>
    );
  }
}

export default TodoCard;
