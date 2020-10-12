import React,{Component} from 'react';
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
import Projects from './Components/Projects.jsx'
import ContactForm from './Components/ContactForm.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div className='App'>
        <div className='tagline'>
          <h1> Hi, I'm Owen Jones. </h1>
        </div>
          <Bio />
          <div className='border-div'> 
          </div>
          <Projects />
          <ContactForm />
          <Navigation />
      </div>
    )
  }
}

export default App;
