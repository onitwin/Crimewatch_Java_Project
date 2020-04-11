import React, {Fragment} from 'react';


const News = (props) =>{
  if(!props.news){
    return "Loading....."
  }

  return (
    // <Fragment>
       <p>
Hello from NewsList
 </p>
// </Fragment>
)
}

export default News;
