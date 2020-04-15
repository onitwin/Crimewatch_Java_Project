
import React ,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from "leaflet"


const MapComponent =(props)=>{


  const icons={
  };

  icons["anti-social-behaviour"] = new Icon({
    iconUrl: "./angry.png",
    iconSize: [25, 25]
  });

  icons["bicycle-theft"]= new Icon({
    iconUrl:"./bike.png",
    iconsSize:[25,25]
  })

  icons["burglary"]= new Icon({
    iconUrl:"./thief2.png",
    iconsSize:[25,25]
  })

  icons["criminal-damage-arson"]= new Icon({
    iconUrl:"./fire.png",
    iconsSize:[25,25]
  })


  icons["drugs"]= new Icon({
    iconUrl:"./drugs.png",
    iconsSize:[25,25]
  })


  icons["other-theft"]= new Icon({
    iconUrl:"./thief2.png",
    iconsSize:[25,25]
  })



  icons["possession-of-weapons"]= new Icon({
    iconUrl:"./knife.png",
    iconsSize:[25,25]
  })



  icons["public-order"]= new Icon({
    iconUrl:"./antiSocial.png",
    iconsSize:[25,25]
  })


  icons["robbery"]= new Icon({
    iconUrl:"./crowbar.png",
    iconsSize:[25,25]
  })



  icons["shoplifting"]= new Icon({
    iconUrl:"./shoplift.png",
    iconsSize:[25,25]
  })


  icons["theft-from-the-person"]= new Icon({
    iconUrl:"./theftFromPerson.png",
    iconsSize:[25,25]
  })


  icons["vehicle-crime"]= new Icon({
    iconUrl:"./carCrime.png",
    iconsSize:[25,25]
  })


  icons["violent-crime"]= new Icon({
    iconUrl:"./violentCrime.png",
    iconsSize:[25,25]
  })

  icons["other-crime"]= new Icon({
    iconUrl:"./otherCrime.png",
    iconsSize:[25,25]
  })








  const position = [props.postcodeData.latitude,props.postcodeData.longitude]

  debugger;
  const leafletMarkers=props.crimes.map((crime)=>(
    <Marker className={crime.category} key={`crime_${crime.id}`}position={[(crime.location.latitude),(crime.location.longitude)]}
    draggable="true" icon={icons[crime.category]}>
    <Popup>
    <p><strong>Crime Type:</strong></p>
    <div>
    <p>{crime.category}</p>
    </div>
    </Popup>

    </Marker>
  ))







  return (


    <Map  center={position} zoom={18}   >
    <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />





    {leafletMarkers}

    </Map>




  )


}

export default MapComponent;
