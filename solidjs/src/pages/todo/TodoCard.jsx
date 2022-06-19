import './TodoCard.css';
import Icon from '../../components/Icon';
import CompleteIcon from './CompleteIcon';

export default props => {
  return (
    <div className="todo-card">
      <CompleteIcon value={!!props.completed} onToggle={bool => props.onToggle?.(bool)} />
      <input
        className="title"
        value={props.title}
        disabled={!!props.completed}
        onChange={e => props.onTextChange?.(e.target.value)}
      />
      <Icon className="delete" icon="xmark" onClick={() => props.onDelete?.()} />
    </div>
  );
};
