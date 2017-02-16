import React from 'react';
import CameraScreen from './CameraScreen';
import {Button} from 'react-bootstrap';
import iPhoneStyles from './iPhoneStyles.css';
// export default class IPhone extends Component {
export default (props) => (
    <div>
      <div className="marvel-device iphone6plus gold landscape">
        <div className="top-bar" />
        <div className="sleep" />
        <div className="volume" />
        <div className="camera" />
        <div className="sensor" />
        <div className="speaker" />
        <div className="screen">
          <CameraScreen />
        </div>
        <div className="home" />
        <div className="bottom-bar" />
      </div>
      <button className={`btn btn-default ${iPhoneStyles.shutterButton} ${iPhoneStyles['btn-circle']} ${iPhoneStyles['btn-lg']}`} onClick={props.onClick}>
        <i id="startButton" className={'fa fa-camera-retro fa-1x'} />
      </button>
    </div>
);
