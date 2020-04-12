import React, {Fragment} from 'react';
import Story from './Story';

const StoryList = (props) => {

   console.log(props);
  if(props.stories.length === 0){
    return (<p>Loading.....</p>)
  }

  const stories = props.stories.map( story =>{
    return (
     <li key={story.title} className = "component-item">

        <Story story={story} />

      </li>

    )
  }
)

  return (
    <Fragment>
    <h1> Crime News </h1>
		<ul className="component-list">
			{stories}
		</ul>
    </Fragment>
)

}

export default StoryList;
