import React, {Fragment,Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


const MapMarker =(props)=>{
  if(props.crimes===0){
    return console.log("nothing to report")
  }

  const markers=props.crimes.map((crime)=>{
    return (
      <Marker key={crime.id} position={[crime.location.latitude,crime.location.longitude]}/>
    )
  })

  return (
    {markers}
  )
}


export default MapMarker;
