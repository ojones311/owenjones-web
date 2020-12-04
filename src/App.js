import React,{Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
import Projects from './Components/Projects.jsx'
import ProjectPage from './Components/ProjectPage.jsx'
import ContactForm from './Components/ContactForm.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      project_name: ''
    }
  }

  renderProjectPage = (routeProps) => {
    return <ProjectPage {...routeProps} project_name={this.state.project_name}/>
  }

  render(){
    return(
      <div className='App'>
        <div className='tagline'>
          <h1> Hi, I'm Owen Jones. </h1>
        </div>
          <Bio />
          <div className='border-div'> </div>
          <Projects />
          <ContactForm />
          <Navigation />
          {/* <BrowserRouter>
            <Switch>
              <Route path="/project/:project_name" render={this.renderProjectPage}/>
            </Switch>
          </BrowserRouter> */}
      </div>
    )
  }
}

export default App;
