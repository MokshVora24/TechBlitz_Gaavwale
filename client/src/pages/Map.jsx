// MapComponent.jsx
import React from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
  const mapStyle = 'mapbox://styles/mapbox/streets-v11';

  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '400px',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={mapStyle}
      mapboxApiAccessToken={`pk.eyJ1Ijoic2FtejI0MDciLCJhIjoiY2x0c2MyNHd6MHJ6eDJqbmp0YjA4bjEwaiJ9.9lHNr-T6cD4VN9suXK1nIg`}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default MapComponent;
