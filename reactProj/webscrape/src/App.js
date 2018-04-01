import React, { Component } from 'react';
import Scraper from './scraper.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    let url = "https://campusdining.princeton.edu/dining/_Foodpro/online-menu/menuDetails.asp?sName=Princeton+University+Campus+Dining&locationNum=02&locationName=Butler+%26+Wilson+Colleges&naFlag=1";
    let scraper = new Scraper(url);
    let json = Scraper.getJSONString(url);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="Menu">
          The menu goes here. test1
        </p>
        <p className="Menu">
          test2
        </p>
        <p> Data: {json} </p>
      </div>
    );
  }
}

export default App;
