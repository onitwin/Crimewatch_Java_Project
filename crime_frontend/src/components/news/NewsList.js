import React from 'react';
// import News from './News.js';

const NewsList = (props) => {
  debugger;
   console.log(props.news);
  if(props.news.length === 0){
    return (<p>Loading.....</p>)
  }

  // const news = props.news.map((news, index) =>{
  //   return (
  //     <li key={index} className = "component-item">
  //       <div className = "component">
  //         <News news={news} />
  //       </div>
  //     </li>
  //   )
  // })

  return (
    <p>Hello from newslist</p>
  )
}

export default NewsList
