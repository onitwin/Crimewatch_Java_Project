import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoryList from '../components/stories/StoryList.js';

class NewsContainer extends Component{


  constructor(props){
    super(props);
    this.state ={
      stories: []
    }
  }

  componentDidMount(){

     const url = 'https://newsapi.org/v2/everything?q=crime&apiKey=2218c76040f6429a899670d4e4628c6c'
     fetch(url)
        .then(res => res.json())
        .then(stories => {
        this.setState({ stories: stories.articles})
        })
        .catch(err => console.error);

  }



  render(){
   return(

      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) =>{
              return <StoryList  stories={this.state.stories}/>
            }} />

          </Switch>
        </Fragment>
      </Router>

    )
  }
}

export default NewsContainer;
