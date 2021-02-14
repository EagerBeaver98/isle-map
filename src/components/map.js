import React from 'react';
import mapImg from '../img/map-v3-big.jpg';
import useMouse from '@react-hook/mouse-position';

function Map () {
  const target = React.useRef(null);
  const mouse = useMouse(target);

  const coordinates = () => {
    if (mouse.isOver) {
      return (
        <div className="coords">
      <div>
        X: {Math.floor(mouse.x)} {/* x top left -824 y 724 */}
      </div>
      <div>
        Y: {Math.floor(mouse.y)}
      </div>
    </div>
      )
    }
  }

  return (
    <>
    <img ref={target} id="map" alt="map" src={mapImg} width="800px"></img>
    {coordinates()}
    </>
  )
}

export default Map;