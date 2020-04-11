import React, {Component} from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import NavBar from '../NavBar';

class CrimeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: "",
      postcode: "",
      postcode_data: [],
      date: ""
    }

    this.handlePostcodeChange = this.handlePostcodeChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isValidPostcode = this.isValidPostcode.bind(this)
    this.formatPostcode = this.formatPostcode.bind(this)


  }

async  fetchPostcodeData(postcode){
  const url = "http://api.postcodes.io/postcodes/"+postcode
   await fetch(url).then(data => data.json()).then((data) => {
    this.setState({postcode_data: data.result})
  })
  this.fetchCrimeData(this.state.postcode_data)
}

fetchCrimeData(postcode){
  const url = ("https://data.police.uk/api/crimes-at-location?date="+this.state.date+"&lat="+postcode.latitude +"&lng="+postcode.longitude)
   fetch(url).then(data => data.json()).then((data) =>
    console.log(data))

}




handlePostcodeChange(event){

  let postcode = this.state.postcode
  postcode = event.target.value
  this.setState({postcode:postcode})
}

handleDateChange(event){

  let date = this.state.date
  date = event.target.value
  this.setState({date:date})
}
 isValidPostcode(p) {
    var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    return postcodeRegEx.test(p);
}

formatPostcode(p) {
    if (this.isValidPostcode(p)) {
        var postcodeRegEx = /(^[A-Z]{1,2}[0-9]{1,2})([0-9][A-Z]{2}$)/i;
        return p.replace(postcodeRegEx,"$1 $2").toUpperCase();
    } else {
      return  alert('An invalid postcode was submited');

    }
}

handleSubmit(event){
  event.preventDefault();
  this.setState({postcode:this.formatPostcode(this.state.postcode)})
  this.fetchPostcodeData(this.state.postcode)
  this.setState({date:this.state.date})

}


render(){
  return(
<div>
 <p> Crime Front Page </p>

<form  onSubmit={this.handleSubmit}>
  <input type="text" placeholder="Postcode"
  onChange={this.handlePostcodeChange} value={this.state.postcode}/>
<input type="month" placeholder="date"   onChange={this.handleDateChange} value={this.state.date}/>
  <button type="submit"> Submit </button>
</form>
</div>
  )
}

}


export default CrimeContainer;
