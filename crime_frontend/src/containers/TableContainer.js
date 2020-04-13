import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CrimeTable from '../components/table/CrimeTable'
import Request from '../helpers/request'


class TableContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: [],
      rOUkCrimes: []
    }
  }

componentDidMount(){
  const request = new Request();
  request.get('api/crimes').then((data) => {
    this.setState({crimes: data})
  })

  // const lat = '53.794042';
  // const lng = '-1.586510';
  // const date = '2020-01'
  // const url = `https://data.police.uk/api/crimes-street/all-crimes?lat=${lat}&lng=${lng}&date=${date}`

  const lat1 = '52.268';
  const lng1 = '0.543';
  const lat2 = '52.794';
  const lng2 = '0.238';
  const lat3 = '52.130';
  const lng3 = '0.478';
  const date = '2018-01'
  const url = `https://data.police.uk/api/crimes-street/all-crime?poly=${lat1},${lng1}:${lat2},${lng2}:${lat3},${lng3}&date=${date}`
  fetch(url)
     .then(res => res.json())
     .then(roukcrimes => {
       debugger;
     this.setState({ rOUkCrimes: roukcrimes})
     debugger;
     })


}

render(){
  return(


    <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
      return <CrimeTable crimes={this.state.crimes} rOUkCrimes={this.state.rOUkCrimes}/>
    }} />
      </Switch>
      </Fragment>
    </Router>
  )
}

}


export default TableContainer;
