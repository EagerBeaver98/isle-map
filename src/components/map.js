import mapImg from '../img/map-v3-big.jpg';

function Map (props) {
  const coordTracker = () => {
    const map = document.getElementById('map');
    if (props.coords.x || props.coords.y ) {
      return (
        <div className="coords">
        <h2>x coords: {props.coords.x}</h2>
        <h2>y coords: {props.coords.y}</h2>
        </div>
      )
    }
  };


  return (
    <>
    <img id="map" alt="map" src={mapImg} width="60%" onClick={() => {
      props.setCoords({x: 1, y: 1})
      console.log(document.getElementById("map"))
      }} ></img>
    {coordTracker()}
    </>
  )
}

export default Map;