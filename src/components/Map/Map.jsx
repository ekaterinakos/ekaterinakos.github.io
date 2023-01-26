import React, { useRef } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import styles from './styles.module.css';
import { mapTheme } from './mapTheme';

export const Map = ({ center }) => {
  const mapRef = useRef(undefined);
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  const latlng = {
    lat: 50.0775,
    lng: 14.453727,
  };

  const defaulOptions = {
    clickableIcons: true,
    styles: mapTheme,
    draggable: true,
    scrollwheel: false,
    overviewMapControl: true,
    streetViewControl: true,
    zoomControl: true,
    disableDefaultUI: true,
  };
  // const directionsService = mapRef.current.directionsService();
  // const directionsRenderer = mapRef.current.directionsRenderer();

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <div className={styles.root}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaulOptions}
      >
        {/* <DistanceMatrixService
          options={{
            destinations: [],
            origins: [{ lng: 50.0775, lat: 14.453727 }],
            travelMode: 'DRIVING',
          }}
          callback={(response) => {
            console.log(response);
          }}
        /> */}
        ;
        <Marker
          onClick={() => console.log('hello')}
          icon={{
            url: require('./img/mapMarker.png'),
          }}
          position={center}
          animation={Animation.BOUNCE}
        />
      </GoogleMap>
    </div>
  );
};
