import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingBar from './LandingBar';
import DownArrow from './images/down_arrow.png'

class Landing extends Component {
    render() {
        return (
            <div className="landing-cont">
                <div className="landing-bars">
                    <LandingBar cap="s" color="#7798ab" word="tudent" />
                    <LandingBar cap="w" color="#99db9e" word="orkers" />
                    <LandingBar cap="o" color="#e8ca71" word="rganizing" />
                    <LandingBar cap="l" color="#f2af74" word="eague" />
                </div>
                <div className="center-cont">
                    <div className="learn-more">
                        learn more
                    </div>
                    <img className="down-arrow" src={DownArrow} />
                </div>
            </div>
        );
    }
}

export default Landing;