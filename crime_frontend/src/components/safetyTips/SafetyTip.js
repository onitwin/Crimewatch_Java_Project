import React from 'react';
import Card from 'react-bootstrap/Card';



const SafetyTip = (props) => {


  if(!props.safetyTip){
    return "Loading"
  }

  return(
    <div className= "stories">
        <Card.Img variant="top"   className="SafetyTipListItem-img" src={props.safetyTip.imageURL} />
    <Card.Header as="h5">  {props.safetyTip.title} </Card.Header>

  <Card.Body>

      <p> {props.safetyTip.description} </p>

  </Card.Body>
  </div>
  )
}

export default SafetyTip;
