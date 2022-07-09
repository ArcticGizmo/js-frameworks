import './Layout.css';
import { Link, useMatch, useNavigate, useRoutes } from 'solid-app-router';
import NavItem from './NavItem';

export default props => {
  const Routes = useRoutes(props.routes);

  const links = props.routes
    .filter(r => !r.hide)
    .map((r, i) => {
      const match = useMatch(() => r.path);
      return (
        <Link href={r.path} key={i} classList={{ active: Boolean(match()) }}>
          <NavItem route={r} />
        </Link>
      );
    });

  let path = window.location.hash.slice(1);

  if (path === '/') {
    path = '/todo';
  }

  const navigate = useNavigate();

  navigate(path, { replace: true });

  return (
    <div className="layout">
      <div className="nav-bar">
        <a class="docs" href="https://www.solidjs.com/" target="_blank">
          <img src="logo.svg" alt="Solidjs logo" />
        </a>
        {links}
      </div>

      <div className="page-wrapper">
        <div className="page">
          <Routes />
        </div>
      </div>
    </div>
  );
};
