import React,{Component} from 'react';
import {Route, Switch, BrowserRouter, withRouter} from 'react-router-dom'
import ProjectPage from './Components/ProjectPage.jsx'
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
import Projects from './Components/Projects.jsx'
import ContactForm from './Components/ContactForm.jsx'
import UITest from './Components/UITest.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      project_name: ''
    }
  }

  render(){
    return(
      <BrowserRouter>
          <div className='App'>
            <div className='tagline'>
              <h1> Hi, I'm Owen Jones. </h1>
            </div>
            <div>
              <div class='interface'>
                <div className='border-div'> </div>
                  <Switch>
                    <Route exact path="/" render={()=> <UITest />} />
                    {/* <Route path="/projects" render={()=> <Projects />} /> */}
                    <Route path="/project/:name" render={()=>  <ProjectPage name={this.state.project_name}/>} />
                  </Switch>
              </div>
              </div>
          </div>
       </BrowserRouter>
    )
  }
}

export default App;
