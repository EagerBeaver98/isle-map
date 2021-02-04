import { useState } from 'react';

export default function MouseCoords () {
  const [coords, setCoords] = useState({x: 0, y: 0});
  return {coords, setCoords}
}