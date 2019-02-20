import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    userName : "Subhankar Das"
  }
  render() {
    return <div>
      <UserInput />
      <UserOutput  userName = {this.state.userName}/>
      <UserOutput userName = {this.state.userName}/>
    </div>
  }
}

export default App;
