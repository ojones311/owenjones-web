import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
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
            <Heading />
          </div>
          <div>
            <div className='interface'>
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
