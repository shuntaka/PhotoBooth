import React, { Component } from 'react';
import Camera from './Camera.jsx';

export default class IPhone extends Component {
  handleSaveClick(event) {
    alert('saved');
  }

  render() {
    return (
        <div className="marvel-device iphone6plus gold landscape">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
        <Camera />
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
        </div>
    );
  }
}
