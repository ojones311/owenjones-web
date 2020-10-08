import React,{Component} from 'react';
import Navigation from './Components/Navigation.jsx'
import Bio from './Components/Bio.jsx'
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
          <h1> Hi, I'm Owen Jones and I'm a full-stack software developer </h1>
        </div>
          <Bio />
          <img id='profile-pic' src='./pics/portfolio_pic.jpg' alt='Profile' ></img>
      </div>
    )
  }
}

export default App;
