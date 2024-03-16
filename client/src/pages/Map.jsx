import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);

  const mapContainerStyle = {
    width: '100%',
    height: '100vh', // Set the map height to 100vh
  };

  const center = {
    lat: 19.3839,
    lng: 72.8287,
  };

  const handleMapClick = (e) => {
    const newMarker = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarkers([...markers, newMarker]);
  };

  const handleMarkerClick = (index) => {
    const newMarkers = [...markers];
    newMarkers.splice(index, 1);
    setMarkers(newMarkers);
  };

  return (
    <LoadScript id='find-services' googleMapsApiKey="AIzaSyDDLv9kVDyasgpYJ7zzzFcOM3R4cTHFB5U">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker}
            onClick={() => handleMarkerClick(index)}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
