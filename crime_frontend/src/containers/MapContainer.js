import React,{Fragment,Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



class MapContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      lat: 55.860916,
      lng: -4.251433,
      zoom: 13,

    }
  }

  render(){
    const position = [this.state.lat, this.state.lng]
    return (
      <div className='mapDiv'>
      <p>Map SHOULD show up below</p>
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      <Popup>
      This is holding text <br /> Should be able to update
      <br/>with crime data
      </Popup>
      </Marker>
      </Map>
      </div>
    )


  }





}


export default MapContainer
