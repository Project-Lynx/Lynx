import * as React from 'react';
import ReactMapGL from 'react-map-gl';

const SessionMap = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 20.36930529601914,
    longitude: 4.330731935876205,
    zoom: 0,
  });

  return (
   <ReactMapGL
     {...viewport}
     width="100%"
     height="100%"
     mapStyle="mapbox://styles/mapbox/light-v10"
     mapboxApiAccessToken="pk.eyJ1IjoicHJvamVjdC1seW54IiwiYSI6ImNrdGx1OGYzcjF6dmMyb2s0djFjMTB6eXMifQ.vXKVyD-koXV0lqDWBtkHhg"
     onViewportChange={(viewport) => setViewport(viewport)}
   />
  );
}

export default SessionMap;
