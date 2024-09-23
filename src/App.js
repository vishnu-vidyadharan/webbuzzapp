import './index.css';
import NavBar from "./components/NavBar";
import Theme from "./components/Theme";
import Match from "./components/Match";
import EventList from "./components/EventList";
import Filler from './components/Filler';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Theme/>
      <Filler/>
      <Match/>
      <Toaster position='bottom-right'/>
    </div>
  );
}

export default App;
