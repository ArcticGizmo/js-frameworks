import './TTTCell.css';

export default props => {
  return (
    <div className="ttt-cell" classList={{ empty: !props.letter }} onClick={props.onSelect}>
      {props.letter || ''}
    </div>
  );
};
