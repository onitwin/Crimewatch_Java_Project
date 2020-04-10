import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CrimeContainer from './CrimeContainer'
import NewsContainer from './NewsContainer'
import TableContainer from './TableContainer'


const MainContainer = () => {

  return(
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
    <Route path="/home" component={CrimeContainer}/>
       <Route path="/crimes" component={TableContainer}/>
       <Route path="/news" component={NewsContainer}/>
    </Switch>
    </Fragment>
    </Router>
  )
}

export default MainContainer;
