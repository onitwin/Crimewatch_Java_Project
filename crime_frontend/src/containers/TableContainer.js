import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CrimeTable from '../components/table/CrimeTable'
import Request from '../helpers/request'


class TableContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      crimes: [],
      rOUkCrimes: [],
      rOUkUniqueCrimes: [],
      uniqueROUkCrimeCategories:[]
    }
  }



  uniqueCategoryCounter(roukcrimes){
    //scroll through each member of roukcrimes and count the occurences of each category name:

      // ///WORKS BUT ONLY RETURNS UNIQUE NAMES DOESN'T GIVE COUNTS
      // let uniqueROUkCrimeCategories = [];
      // roukcrimes.forEach((item) => {
      //   if(uniqueROUkCrimeCategories.indexOf(item.category) < 0) {
      //     uniqueROUkCrimeCategories.push(item.category);
      //   }
      //
      // });

      //
      // assignKey(obj, key) {
      //   typeof obj[key] === 'undefined' ? obj[key] = 1 : obj[key]++;
      // }

      const uniqueROUkCrimeCategories = [];

      roukcrimes.forEach((item) => {
      // for(let itemCount = 0; itemCount < item.length; itemCount++){
        typeof uniqueROUkCrimeCategories[item.category] === 'undefined' ? uniqueROUkCrimeCategories[item.category] = 1 : uniqueROUkCrimeCategories[item.category]++;

        // debugger;
        // let uniqCatArrayObject = {item.category,1}
        // if(uniqueROUkCrimeCategories.indexOf(item.category) < 0) {
        //
        //   uniqueROUkCrimeCategories.push(uniqCatArrayObject);
        // }else{
        //   //now to increment the count
        //    uniqueROUkCrimeCategories[itemCount+1].count ++;/////////////////////DONT KNOW IF THIS WILL WORK
        // }
      //
      //     let i = uniqueROUkCrimeCategories.findIndex(existingCat => extistingCat.itemCategory == item.category);
      //     if(i <= -1){
      //       uniqueROUkCrimeCategories.push({item.category, 1})
      //     } else{
      //       // item already exists, now increment count
      //
      //     }
      //
      });


      console.log(uniqueROUkCrimeCategories);
      return uniqueROUkCrimeCategories;

    }

  // }

    //}









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
         //scroll through each member of roukcrimes and count the occurences of each category name:
         this.setState({ rOUkUniqueCrimes: this.uniqueCategoryCounter(roukcrimes)})
       })
     }

  render(){
    return(


      <Router>
        <Fragment>
        <Switch>
        <Route render={(props) =>{
        return <CrimeTable crimes={this.state.crimes} rOUkCrimes={this.state.rOUkUniqueCrimes}/>
      }} />
        </Switch>
        </Fragment>
      </Router>
    )
  }

}


export default TableContainer;
