import React,{Component} from 'react';
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom'
import ProjectPage from './Components/ProjectPage.jsx'
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
import Projects from './Components/Projects.jsx'
import ContactForm from './Components/ContactForm.jsx'
import UITest from './Components/UITest.jsx'
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
            <h1> Hi, I'm Owen Jones. </h1>
          </div>
          <div>
            <div class='interface'>
              {/* <div className='border-div'> </div> */}
              <UITest />
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
