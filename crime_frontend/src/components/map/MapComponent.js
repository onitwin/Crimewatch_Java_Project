
import React, {Fragment} from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MapMarker from "./MapMarker";
import MaoMarker from "./MapMarker"



const MapComponent =(props)=>{

  const position = [props.postcodeData.latitude,props.postcodeData.longitude]

  const leafletMarkers=props.crimes.map((crime)=>(
    <Marker key={`crime_${crime.id}`}position={[(crime.location.latitude),(crime.location.longitude)]}/>
  ))






  return (
    <Fragment className='mapDiv'>

    <Map center={position} zoom={16}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />




    <Marker position={[55.860300,-4.251400]}>

    </Marker>
    {leafletMarkers}

    </Map>
    </Fragment>
  )


}


export default MapComponent;
