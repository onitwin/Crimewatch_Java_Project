import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CrimeTable from '../components/table/CrimeTable'
import EnglishCrimeTable from '../components/table/EnglishCrimeTable'
import Request from '../helpers/request'


class TableContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: [],
      englishCrimes: []
    }
  }

  componentDidMount(){
  const request = new Request();
  request.get('api/crimes').then((data) => {
    this.setState({crimes: data})
  })

  const request2 = new Request();
  request2.get('api/englishCrimes').then((data) => {
    this.setState({englishCrimes: data})
  })
}

render(){
  return(


    <Router>
      <Fragment>
 <p> <CrimeTable crimes={this.state.crimes}/>
        </p>
       <p>
      <EnglishCrimeTable englishCrimes={this.state.englishCrimes}/>
         </p>

      </Fragment>
    </Router>
  )
}

}


export default TableContainer;
