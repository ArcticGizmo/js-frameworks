import './CompleteIcon.css';
import Icon from '../../components/Icon';

export default props => {
  const classes = () => {
    return {
      complete: !!props.value,
      incomplete: !!props.value,
    };
  };

  return (
    <div
      className="complete-icon"
      classList={classes()}
      onClick={() => props.onToggle?.(!props.value)}
    >
      {props.value}
      <Icon icon="check" />
    </div>
  );
};
