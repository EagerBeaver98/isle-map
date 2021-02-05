import { useState } from 'react';

export default function MouseCoords () {
  const [coords, setCoords] = useState({});
  return {coords, setCoords}
}