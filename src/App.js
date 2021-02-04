import './App.css';
import Map from "./components/map";
import './main.scss';
import MouseCoords from './hooks/mouseCoords';

function App() {
  const {coords, setCoords} = MouseCoords();
  return (
    <div className="App">
      <h1>The Isle Map</h1>
      <Map coords={coords} setCoords={setCoords}/>
    </div>
  );
}

export default App;
