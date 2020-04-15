import React from 'react';
import Card from 'react-bootstrap/Card';

const Story = (props) =>{


  return (
     <div className= "stories">
       <Card.Header as="h5">  {props.story.title} </Card.Header>

    <Card.Body>
    <blockquote className="blockqoute mb-0">
    <p>
    {' '}
    {props.story.description}{' '}
    </p>
    <p>
  <a href={props.story.url}> Click to view article </a>
     </p>
        </blockquote>
    <footer className="blockquote-footer" text='white'>
 Author: <cite title="Source Title"> {props.story.author}
    </cite>
     </footer>

   </Card.Body>
   </div>
)
}

export default Story;
