import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CrimeTable from '../components/crimedata/CrimeTable'
import Request from '../helpers/request'


class TableContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: []
    }
  }

  componentDidMount(){
  const request = new Request();
  request.get('api/crimes').then((data) => {
    this.setState({crimes: data})
  })
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
