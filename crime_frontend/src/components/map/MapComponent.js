import React,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import MapMarker from "./MapMarker";



const MapComponent =(props)=>{

  const position = [props.postcodeData.latitude,props.postcodeData.longitude]
  return (
    <div className='mapDiv'>

    <Map center={position} zoom={16}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    <Marker position={position}>
    <Popup>
    <p>This is the original with position <br/>tied to start point</p>
    </Popup>
    </Marker>


    <Marker position={[55.860300,-4.251400]}>
    
    </Marker>






    </Map>
    </div>
  )


}


export default MapComponent;
