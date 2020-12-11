import React,{Component} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import ProjectPage from './Components/ProjectPage.jsx'
import UITest from './Components/UITest.jsx'
import Heading from './Components/Heading.jsx'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      project_name: ''
    }
  }
  
  
  render(){
    return(
        <div className='App'>
          <div className='tagline'>
            <h1 onClick={this.backToHomePage}> Hi, I'm Owen Jones. </h1>
          </div>
          <div>
            <div class='interface'>
              <div className='border-div'> </div>
                <Switch>
                  <Route exact path="/"><UITest/></Route>
                  <Route path="/project/:name"><ProjectPage /></Route>
                </Switch>
            </div>
            </div>
        </div>
    )
  }
}

export default App;
