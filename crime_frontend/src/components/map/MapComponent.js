
import React ,{Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from "leaflet"


const MapComponent =(props)=>{


  const icons={
  };

  icons["anti-social-behaviour"] = new Icon({
    iconUrl: "./angry.png",
    iconSize: [30, 30]
  });

  icons["bicycle-theft"]= new Icon({
    iconUrl:"./biketheft.png",
    iconsSize:[25,25]
  })

  icons["burglary"]= new Icon({
    iconUrl:"./burglary.png",
    iconsSize:[5,5]
  })

  icons["criminal-damage-arson"]= new Icon({
    iconUrl:"./arson.png",
    iconsSize:[25,25]
  })


  icons["drugs"]= new Icon({
    iconUrl:"./drugsplant.png",
    iconsSize:[25,25]
  })


  icons["other-theft"]= new Icon({
    iconUrl:"./theft5.png",
    iconsSize:[25,25]
  })



  icons["possession-of-weapons"]= new Icon({
    iconUrl:"./gun.png",
    iconsSize:[25,25]
  })



  icons["public-order"]= new Icon({
    iconUrl:"./swearing.png",
    iconsSize:[20,20]
  })


  icons["robbery"]= new Icon({
    iconUrl:"./robbery.png",
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
    iconUrl:"./punch.png",
    iconsSize:[25,25]
  })

  icons["other-crime"]= new Icon({
    iconUrl:"./handcuffs.png",
    iconsSize:[25,25]
  })



  const position = [props.postcodeData.latitude,props.postcodeData.longitude]


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
