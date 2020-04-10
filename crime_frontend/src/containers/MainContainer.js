import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CrimeContainer from './CrimeContainer'
import NewsContainer from './NewsContainer'


const MainContainer = () => {

  return(
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
       <Route path="/crimes" component={CrimeContainer}/>
       <Route path="/news" component={NewsContainer}/>
    </Switch>
    </Fragment>
    </Router>
  )
}

export default MainContainer;
