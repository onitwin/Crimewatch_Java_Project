import React, {Component} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Request from '../helpers/request'
// import NavBar from '../NavBar';

class CrimeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: []
    }
  }

//   componentDidMount(){
//   const request = new Request();
//   request.get('api/crimes').then((data) => {
//     this.setState({crimes: data})
//   })
// }

render(){
  return(

 <p> Crime Front Page </p>
  )
}

}


export default CrimeContainer;
