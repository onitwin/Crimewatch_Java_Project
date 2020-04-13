import React from 'react';
import Story from './Story';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

const StoryList = (props) => {


  if(props.stories.length === 0){
    return (<p>Loading.....</p>)
  }

  const stories =  props.stories.map((story) => (
      <div key={story.title} cols={story.cols || 1}>
        <Story  story={story}/>
      </div>

        ))




  return (
    <div >

    <h2 className="header"> Lastest Crime News </h2>
   <Container >
    <Card bg='dark' text='white'   cellHeight='auto'  >
       {stories}
    </Card>
  </Container>
    </div>
)

}

export default StoryList;
