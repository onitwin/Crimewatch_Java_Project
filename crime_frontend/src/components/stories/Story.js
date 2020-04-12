import React, {Fragment} from 'react';


const Story = (props) =>{


  return (
     <Fragment>


       <h4>

       {props.story.title}
    </h4>
    <p>
   Description:  {props.story.description}
 </p>
 <p>
Author:  {props.story.author}
 </p>
   </Fragment>
)
}

export default Story;
