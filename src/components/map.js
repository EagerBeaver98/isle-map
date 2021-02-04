import mapImg from '../img/map-v3-big.jpg';

function Map (props) {

  return (
    <>
    <img alt="map" src={mapImg} width="60%" onClick={() => props.setCoords({x: 1, y: 1})} ></img>
    <h2>x coords: {props.coords.x}</h2>
    <h2>y coords: {props.coords.y}</h2>
    </>
  )
}

export default Map;