import mapImg from '../img/map-v3-big.jpg';
import MouseCoords from '../hooks/mouseCoords';

function Map () {
  const {coords, setCoords} = MouseCoords();


  return (
    <>
    <img alt="map" src={mapImg} width="60%" ></img>
    <h2>x coords: {coords.x}</h2>
    <h2>y coords: {coords.y}</h2>
    </>
  )
}

export default Map;