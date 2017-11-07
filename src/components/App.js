import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TvShowPicker from './TvShowPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App - TV Show Episode Tracker!</h1>
        </header>
        <TvShowPicker />
      </div>
    );
  }
}

export default App;

// possibly add a `userInput` prop into `TvShowPicker`, then that prop can be passed to other components
