import React from 'react';
import Story from './Story';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';

const StoryList = (props) => {


  if(props.stories.length === 0){
    return (<p>Loading.....</p>)
  }

  const stories =  props.stories.map((story) => (
      <GridListTile key={story.title} cols={story.cols || 1}>
        <Story  story={story}/>
      </GridListTile>

        ))




  return (
    <div className="text">

    <h2 className="header"> Lastest Crime News </h2>
    <GridList justify="center" spacing={50}  cellHeight='auto'  cols={3}>
       {stories}
    </GridList>
    </div>
)

}

export default StoryList;
