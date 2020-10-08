import React,{Component} from 'react';
import Navigation from './Components/Navigation.jsx'
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
        <div className='main-body'>
          <h1> Hi, I'm Owen Jones and I'm a full-stack software developer </h1>
        </div>
      </div>
    )
  }
}

export default App;
