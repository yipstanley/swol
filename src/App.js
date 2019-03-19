import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing.jsx'
import AboutUs from './AboutUs.jsx'
import SupportUs from './Support.jsx'

class App extends Component {

  render() {
    return (
      <div className="main-cont">
        <Landing />
        <AboutUs />
        <SupportUs />
      </div>
    );
  }
}

export default App;
