import "./NavItem.css";

export default (props) => {
  return (
    <div className="nav-item">
      {props.route.name}
      {/* icon goes here */}
      <span className="nav-bar-tooltip">{props.route.name}</span>
    </div>
  );
};
