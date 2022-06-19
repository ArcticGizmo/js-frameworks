import Layout from './layout/Layout';
import routes from './code/routes.js';

export default function App() {
  return (
    <div>
      <Layout routes={routes} />
    </div>
  );
}
