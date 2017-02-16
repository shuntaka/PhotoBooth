import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import CameraScreen from './CameraScreen';
import iPhoneStyles from './iPhoneStyles.css';

export default class IPhone extends Component {
  render(props) {
    return (
      <Col className={`${iPhoneStyles.column}`}>
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
        <Button className={`${iPhoneStyles.shutterButton} ${iPhoneStyles['btn-circle']} ${iPhoneStyles['btn-lg']}`} onClick={this.props.onClick}>
          <i className={'fa fa-camera-retro fa-1x'} />
        </Button>
      </Col>
    );
  }
}
