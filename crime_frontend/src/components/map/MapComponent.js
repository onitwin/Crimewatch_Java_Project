import React,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



const MapComponent =(props)=>{

  const position = [53.483959,-2.244644]
  return (
    <div className='mapDiv'>

    <Map center={position} zoom={16}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
    <Popup>
    This is component <br /> This is not container
    <br/>with crime data
    </Popup>
    </Marker>
    </Map>
    </div>
  )


}


export default MapComponent;
