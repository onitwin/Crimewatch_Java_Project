import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CrimeContainer from './CrimeContainer'
import NewsContainer from './NewsContainer'
import TableContainer from './TableContainer'
import SafetyTipsContainer from './SafetyTipsContainer'



const MainContainer = () => {


  const storyLinks = [
    {name: "Latest", url: `http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2218c76040f6429a899670d4e4628c6c`},
  ];

  const storyDetails = [];
  return(


    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
    <Route path="/home" component={CrimeContainer}/>
       <Route path="/crimes" component={TableContainer}/>
       <Route path="/news" component={NewsContainer} storyLinks={storyLinks} storyDetails={storyDetails}/>
       <Route path="/safetyTips" component={SafetyTipsContainer}/>
    </Switch>
    </Fragment>
    </Router>
  )
}

export default MainContainer;
