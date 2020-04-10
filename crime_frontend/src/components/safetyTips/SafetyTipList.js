import React from 'react';
import SafetyTip from './SafetyTip';

const SafetyTipList = (props) => {

  if(props.safetyTips.length === 0)
  return (<p> loading... </p>)

  const safetyTips = props.safetyTips.map((safetyTip, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <SafetyTip safetyTip={safetyTip}/>
      </div>
      </li>
    )
  })

  return(
    <div>
    <h1> Tips To Say Safe </h1>
    <ul className="component-list">
     {safetyTips}
     </ul>
   </div>
  )
}

export default SafetyTipList;
