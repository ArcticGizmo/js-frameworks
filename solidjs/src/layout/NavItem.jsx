import Icon from '../components/Icon';
import './NavItem.css';

export default props => {
  return (
    <div className="nav-item">
      <Icon icon={props.route.icon} />
      <span className="nav-bar-tooltip">{props.route.name}</span>
    </div>
  );
};
