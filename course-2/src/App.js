import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    userName : "Subhankar Das"
  }

  userNameChangeHandler =(event) => {
    this.setState({userName :event.target.value});
  }

  render() {
    return <div>
      <UserInput changed={this.userNameChangeHandler} currentName= {this.state.userName}/>
      <UserOutput  userName = {this.state.userName}/>
      <UserOutput userName = {this.state.userName}/>
    </div>
  }
}

export default App;
