import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LandingBar extends Component {
  render() {
    return (
      <div className="landing-bar">
        <div className="landing-cap">
            <b style={{color: this.props.color}}>{this.props.cap}</b>
        </div>
        <div className="landing-word">
            {this.props.word}
        </div>
      </div>
    );
  }
}

export default LandingBar;