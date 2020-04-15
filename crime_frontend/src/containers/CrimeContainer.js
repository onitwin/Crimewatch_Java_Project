import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import MapComponent from "../components/map/MapComponent"





class CrimeContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      crimes: [],
      postcode: "",
      postcode_data:{longitude:-4.251433,latitude:55.860916},
      date: "",
      errorMessage: ""



    }

    this.handlePostcodeChange = this.handlePostcodeChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isValidPostcode = this.isValidPostcode.bind(this)
    this.formatPostcode = this.formatPostcode.bind(this)


  }



componentDidMount(){
 const url= ("https://data.police.uk/api/forces")
    fetch(url).then(data => data.json()).then((data) => {
      this.setState({forces: data})
    })

}

async  fetchPostcodeData(postcode){
  const url = "http://api.postcodes.io/postcodes/"+postcode
   await fetch(url).then(data => data.json()).catch(function (err) {
		console.warn('Could not find a post');

	}).then((data) => {
   this.setState({postcode_data: data.result})
 })

  this.fetchCrimeData(this.state.postcode_data)

}

 fetchCrimeData(postcode){
   if(!postcode){
     alert("Postcode entered invalid")
     this.setState({postcode_data:{longitude:-4.251433,latitude:55.860916}})
   }
  const url = ("https://data.police.uk/api/crimes-street/all-crime?lat="+postcode.latitude+"&lng="+postcode.longitude+"&date="+this.state.date)
   fetch(url).then(data => data.json()).then((data) =>{
   this.setState({crimes: data})})


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
  if(this.isValidPostcode(this.state.postcode)){
  this.setState({postcode:this.formatPostcode(this.state.postcode)})
  this.fetchPostcodeData(this.state.postcode)

  this.setState({date:this.state.date})

}else{
  return  alert('An invalid postcode was submited')
}

}


render(){



  return(
<div>
  <p>

  </p>

 <p> For crimes in your area in  <strong>England</strong> and<strong> Wales</strong> please enter the postcode and date you'd like to search </p>
 <div  className="container">
 <div>
 <Form onSubmit={this.handleSubmit}  >
   <Form.Group controlId="formPostcode">
     <Form.Label >Postcode</Form.Label>
     <Form.Control  type="postcode" placeholder="Postcode"onChange={this.handlePostcodeChange} value={this.state.postcode} />
     <Form.Text >
       Only English and Welsh postcodes
     </Form.Text>
   </Form.Group>
   <Form.Group controlId="formDate" >
     <Form.Label>Date</Form.Label>
     <Form.Control type="month" placeholder="Date" onChange={this.handleDateChange} value={this.state.date} min='2017-03' max='2020-02'/>
   </Form.Group>

   <Button variant="primary" type="submit">
     Submit
   </Button>
 </Form>
</div>

 <MapComponent crimes={this.state.crimes} postcodeData={this.state.postcode_data}/>

 </div>



</div>

  )
}

}


export default CrimeContainer;
