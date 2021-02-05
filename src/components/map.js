import { useEffect } from 'react';
import mapImg from '../img/map-v3-big.jpg';

function Map (props) {

  useEffect(() => {

  },[])
  const coordTracker = () => {
    if (props.coords.x || props.coords.y ) {
      return (
        <div className="coords">
        <h2>x coords: {props.coords.x}</h2>
        <h2>y coords: {props.coords.y}</h2>
        </div>
      )
    }
  }

  return (
    <>
    <img alt="map" src={mapImg} width="60%" onClick={() => props.setCoords({x: MouseEvent.pageX, y: MouseEvent.pageY})} ></img>
    {coordTracker()}
    </>
  )
}

export default Map;