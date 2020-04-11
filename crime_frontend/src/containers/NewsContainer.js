import React, {Component, Fragment} from 'react';
// import Request from '../helpers/request';
import {BrowserRouter as Router, Route, Switch} from 'react';
import NewsList from '../components/news/NewsList';

class NewsContainer extends Component{


  constructor(props){
    super(props);
    this.state ={
      storyDetails: []
    }
  }

  componentDidMount(){
    const storyLinks = [
      {name: "Latest", url: 'http://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2218c76040f6429a899670d4e4628c6c'},
    ];

    debugger;


    fetch(storyLinks[0].url)
      .then(res => res.json())
      .then(stories => {
        this.setState({ storyDetails: stories.articles})
      })
      .catch(err => console.error);




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
    if(!this.state.news){
      return null
    }

   return(
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) =>{
              return <NewsList news={this.state.storyDetails}/>
            }} />

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default NewsContainer;
