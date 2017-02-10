import React from 'react';
import Camera from './Camera';

// export default class IPhone extends Component {
export default () => (
  <div className="marvel-device iphone6plus gold landscape">
    <div className="top-bar" />
    <div className="sleep" />
    <div className="volume" />
    <div className="camera" />
    <div className="sensor" />
    <div className="speaker" />
    <div className="screen">
      <Camera />
    </div>
    <div className="home" />
    <div className="bottom-bar" />
  </div>
);
