import React, {Component, Fragment} from 'react';
import Request from '../helpers/request';
import {BrowserRouter as Router, Route, Switch} from 'react';
import NewsList from '../components/news/NewsList';

class NewsContainer extends Component{


  constructor(props){
    super(props);
    this.state ={
      articles: []
    }
  }



  componentDidMount(){
    const storyLinks = [
      {name: "Latest", url: 'http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2218c76040f6429a899670d4e4628c6c'},
    ];

    const request = new Request();
    debugger;
    request.get(storyLinks[0].url)
    .then((data) => {
      this.setState({news: data})
      console.log(`this.state.news = ${this.state.news}`);
      console.log(`data = ${data}`);
      console.log(`this.state.data = ${this.state.data}`);
    })

  }

  //  componentDidMount(){
  //
  //
  //     const request = new Request();
  //     request.get("/news")
  //     .then((data) => {
  //       this.setState({stories: data})
  //   })
  // }

  render(){
    console.log(this.state.news);
    if(!this.state.news){
      return null
    }
   return(
      <Router>
      <Fragment>
      <Switch>
        <Route render={(props) =>{
          return <NewsList news={this.state.news}/>
      }} />
        </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default NewsContainer;
