import React,{Component} from 'react';
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
import Projects from './Components/Projects.jsx'
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
        <Navigation />
        <div className='tagline'>
          <h1> Hi, I'm Owen Jones. </h1>
        </div>
          <Bio />
          <Projects />
      </div>
    )
  }
}

export default App;
