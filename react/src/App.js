import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from './components/Icon'


function App() {
  return (
    <div className="App">
      This is the file
      <Icon icon={['fas', 'list']} />
      {/* <FontAwesomeIcon icon={['fas', 'coffee']} /> */}
    </div>
  );
}

export default App;
