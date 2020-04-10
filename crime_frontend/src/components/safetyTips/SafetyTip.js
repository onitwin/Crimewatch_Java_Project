import React from 'react';

const SafetyTip = (props) => {

  if(!props.safetyTip){
    return "Loading"
  }

  return(
    <div className="component">
    <p className ="title">
      <h2> {props.safetyTip.title} </h2>
      <p> {props.safetyTip.description} </p>
      </p>
      </div>
  )
}

export default SafetyTip;
