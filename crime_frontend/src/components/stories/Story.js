import React, {Fragment} from 'react';


const Story = (props) =>{


  return (
     <div>

       <h4>
      Title: {props.story.title}
    </h4>
    <p>
   Description:  {props.story.description}
 </p>
 <p>
Author:  {props.story.author}
 </p>
   </div>
)
}

export default Story;
