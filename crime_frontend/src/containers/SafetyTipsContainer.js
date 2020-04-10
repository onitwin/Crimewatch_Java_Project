import React, {Component, Fragment} from 'react'
import SafetyTipList from '../components/safetyTips/SafetyTipList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';

class SafetyTipsContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      safetyTips: [],
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/safetyTips').then((data) => {
      this.setState({safetyTips: data})
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
        return <SafetyTipList safetyTips={this.state.safetyTips}/>
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default SafetyTipsContainer;
