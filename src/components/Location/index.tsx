import { useEffect, useRef } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {Loader} from '@googlemaps/js-api-loader';

import styles from './styles.module.scss'


const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -30.0511860,
  lng: -51.2040852
};

export function Location() {
  return (
    <div className={styles.container} id="location">
        <header>
            <img src="/images/marker-big.png" alt="marker" />

            <h1>LOCALIZAÇÃO</h1>
        </header>
        
        <div className={styles.map}>
          <LoadScript
              googleMapsApiKey="AIzaSyDu8-x8o6hPNeO1A8zzMoPQlkxVZyq-6mQ"
              version="weekly"
          >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={210}
                mapTypeId="satellite"
            >
                <Marker position={{lat: -30.0511878, lng: -51.2040852}} />
            </GoogleMap>
          </LoadScript>
        </div>
    </div>
  )
}