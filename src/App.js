import './css/App.css';
import './css/stamp.css';
import pen from './utils/p.png';
import cros from './utils/cros.png';
import { ShowForm } from './components/ShowForm';
import { ShowList } from './components/ShowList';
import { ShowSelect } from './components/ShowSelect';


function App() {
  return (
    <div className='App'>
      <ShowForm/>
      <ShowSelect/>
      <ShowList drow={{pen,cros}}/> 
    </div>
  );
}

export default App;
