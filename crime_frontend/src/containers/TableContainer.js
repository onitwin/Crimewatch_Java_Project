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

  fetchCrimeData(){
    let lat = '53.794042';
    let lng = '-1.586510';
    let date = '2020-01'
    const url = `https://data.police.uk/api/crimes-street/all-crimes?lat=${lat}&lng=${lng}&date=${date}`
    // fetch(url)
    //    .then(res => res.json())
    //    .then(stories => {
    //    this.setState({ stories: stories.articles})
    //    })
    //    .catch(err => console.error);
    debugger;
      return fetch(url)
      .then(res => res.json())
      .then((res) =>{
         //this.setState({rOUkCrimes:res})
         return {res}
      })
        // .catch(alert('....loading'))
           .catch(err => console.error());

      //  fetchCrimeData(postcode){
      //   const url = ("https://data.police.uk/api/crimes-at-location?date="+this.state.date+"&lat="+postcode.latitude +"&lng="+postcode.longitude)
      //    fetch(url).then(data => data.json()).then((data) =>{
      //    this.setState({crimes: data})}).catch(alert('....loading'))
      //
      // }
  }

  componentDidMount(){
  const request = new Request();
  request.get('api/crimes').then((data) => {
    this.setState({crimes: data})
    this.setState({rOUkCrimes: this.fetchCrimeData()})
    debugger;

  })
  // const rOUkCrimes = this.fetchCrimeData();
  //debugger;

}

render(){
  return(


    <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
      return <CrimeTable crimes={this.state.crimes}/>
    }} />
      </Switch>
      </Fragment>
    </Router>
  )
}

}


export default TableContainer;
