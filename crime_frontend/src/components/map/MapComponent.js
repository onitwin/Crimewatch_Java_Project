<<<<<<< HEAD
import React, {Fragment} from 'react';
=======
import React,{Component} from 'react';
>>>>>>> 2aaee7a01c5da11a08cfa493b8b3b9007b15dda1
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



const MapComponent =(props)=>{

  const position = [props.postcodeData.latitude,props.postcodeData.longitude]
  return (
    <Fragment className='mapDiv'>

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
    </Fragment>
  )


}


export default MapComponent;
