
import React, {Fragment} from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
<<<<<<< HEAD
=======
import MapMarker from "./MapMarker";
import MaoMarker from "./MapMarker"
>>>>>>> 7e72f03cb2efbd6c0e0167837d3355de39dd40b7




const MapComponent =(props)=>{
  const position = [props.postcodeData.latitude,props.postcodeData.longitude]
<<<<<<< HEAD
=======

  const leafletMarkers=props.crimes.map((crime)=>(
    <Marker key={`crime_${crime.id}`}position={[(crime.location.latitude),(crime.location.longitude)]}/>
  ))






  return (
    <Fragment className='mapDiv'>
>>>>>>> 7e72f03cb2efbd6c0e0167837d3355de39dd40b7

    const LeafletMarkers = props.crimes.map(crime => (

      <Marker position={[(crime.location.latitude), (crime.location.longitude)]} key={`crime_${crime.id}`}>

<<<<<<< HEAD
      </Marker>
=======
>>>>>>> 7e72f03cb2efbd6c0e0167837d3355de39dd40b7

    ))

<<<<<<< HEAD



  return (


    <Map  center={position} zoom={12}   >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
      <Marker position={position}> </Marker>
    {LeafletMarkers}
=======
    <Marker position={[55.860300,-4.251400]}>
>>>>>>> 7e72f03cb2efbd6c0e0167837d3355de39dd40b7

    </Marker>
    {leafletMarkers}

    </Map>




  )


}

export default MapComponent;
