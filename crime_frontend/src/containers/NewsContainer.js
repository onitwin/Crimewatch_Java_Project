import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react';
// import NewsList from '../components/news/NewsList';

class NewsContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      articles: []
    }
  }

  // componentDidMount(){
  //   const request = new Request();
  //   request.get('link').then((data) => {this.setState({articles:data})})
  // }

  render(){
    return(
      <p> cats </p>
    //   <Router>
    //   <Fragment>
    //   <Switch>
    //   <Route render={(props) =>{
    //   return <NewsList raids={this.state.articles}/>
    // }} />
    //   </Switch>
    //   </Fragment>
    //   </Router>
    )
  }
}

export default NewsContainer;
