import React, { Component } from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import MyComponent from './components/MyComponent';
import Timer from './components/Timer';
import FriendsList from './components/FriendsList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    this.allMyFriends = [
      {
        name: 'Steve', username: 'StevenRStevens', description: 'The one who will help you move.'
      },
      {
        name: 'Anna', username: 'AnAlwaystheBest', description: 'The one who will also help you move.'
      }
    ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FunctionalComponent name="Three Six Mafia" />
        <MyComponent name="The Original"/>
        <MyComponent name="Pizza"/>
        <MyComponent name="Wow Bao"/>

        <Timer />

        <FriendsList friendsArr = {this.allMyFriends} />
      </div>
    );
  }
}

export default App;
