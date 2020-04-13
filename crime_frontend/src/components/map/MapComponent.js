
import React, {Fragment} from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';




const MapComponent =(props)=>{
  const position = [props.postcodeData.latitude,props.postcodeData.longitude]

    const LeafletMarkers = props.crimes.map(crime => (

      <Marker position={[(crime.location.latitude), (crime.location.longitude)]} key={`crime_${crime.id}`}>

      </Marker>

    ))




  return (


    <Map  center={position} zoom={12}   >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      <Marker position={position}> </Marker>
    {LeafletMarkers}


    </Map>




  )


}

export default MapComponent;
