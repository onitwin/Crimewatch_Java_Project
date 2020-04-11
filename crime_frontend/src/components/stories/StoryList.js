import React from 'react';
import Story from './Story';

const StoryList = (props) => {

   console.log(props);
  // if(props.stories.length === 0){
  //   return (<p>Loading.....</p>)
  // }

  const stories = props.stories.map( story =>{
    let num = 0;
    return (
     <li key={story.title} className = "component-item">

        <Story story={story} />

      </li>

    )
  }
)

  return (
		<ul className="component-list">
			{stories}
		</ul>
)

}

export default StoryList;
