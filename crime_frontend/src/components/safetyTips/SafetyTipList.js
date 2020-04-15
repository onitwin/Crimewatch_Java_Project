import React from 'react';
import SafetyTip from './SafetyTip'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



const SafetyTipList = (props) => {


  if(props.safetyTips.length === 0)
  return (<p> loading... </p>)

  const safetyTips = props.safetyTips.map((safetyTip, index) => {
    return(


      <div key={safetyTip.title} cols={safetyTip.cols || 1}>
          <SafetyTip safetyTip={safetyTip}/>
      </div>

    )
  })

  return(
    <div >
    <h1 className="header"> Tips To Say Safe </h1>
     <Container >
    <Card bg='dark' text='white' cellWidth='400px'  cellHeight='auto'  >

     {safetyTips}

     </Card>
      </Container >
   </div>
  )
}

export default SafetyTipList;
