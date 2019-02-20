import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  render() {
    return <div>
      <UserInput />
      <UserOutput />
    </div>
  }
}

export default App;
