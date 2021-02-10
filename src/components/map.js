import React from 'react';
import mapImg from '../img/map-v3-big.jpg';
import useMouse from '@react-hook/mouse-position';

function Map () {
  const target = React.useRef(null);
  const mouse = useMouse(target);

  const coordinates = () => {
    if (mouse.x || mouse.y) {
      return (
        <div className="coords">
      <div>
        X: {mouse.x}
      </div>
      <div>
        Y: {mouse.y}
      </div>
    </div>
      )
    }
  }

  return (
    <>
    <img ref={target} id="map" alt="map" src={mapImg} width="60%"></img>
    {coordinates()}
    </>
  )
}

export default Map;