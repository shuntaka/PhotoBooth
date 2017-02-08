import React, { Component } from 'react';
// import Camera from './Camera.js';

import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

import iPhoneWrapperStyles from './iPhoneWrapperStyles.css';

import cameraStyles from './cameraStyles.css';
import photoStyles from './photoStyles.css';

class Capture extends Component {
  render() {
    return (
      <div>
        <IPhone />
      </div>
    );
  }
}

class IPhone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      constraints: { audio: false, video: { width: 400, height: 300 } }
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.takePicture = this.takePicture.bind(this);
    this.clearPhoto = this.clearPhoto.bind(this);
  };

  componentDidMount() {
    const constraints = this.state.constraints;
    const getUserMedia = (params) => (
      new Promise((successCallback, errorCallback) => {
        navigator.webkitGetUserMedia.call(navigator, params, successCallback, errorCallback);
      })
    );

    getUserMedia(constraints)
      .then((stream) => {
        const video = document.querySelector('video');
        const vendorURL = window.URL || window.webkitURL;

        video.src = vendorURL.createObjectURL(stream);
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });

    this.clearPhoto();

  };
  clearPhoto() {
    const canvas = document.querySelector('canvas');
    const photo = document.getElementById('photo');
    const context = canvas.getContext('2d');
    const { width, height } = this.state.constraints.video;
    context.fillStyle = '#FFF';
    context.fillRect(0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);

  }

  handleSaveClick(event) {
    alert('saved');
  }

  takePicture() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = document.querySelector('video');
    const photo = document.getElementById('photo');
    const { width, height } = this.state.constraints.video;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  handleStartClick(event) {
    event.preventDefault();
    this.takePicture();
  }

  handleSaveClick(event) {
    event.preventDefault();
    alert('saved');
  }

  render() {
    return (
        <div className = {iPhoneWrapperStyles.iPhoneWrapper}>
        <div className="marvel-device iphone6plus gold landscape">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
        <canvas id="canvas" hidden></canvas>
        <Camera handleStartClick={ this.handleStartClick } />
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
        </div>
        <Photo handleSaveClick = { this.handleSaveClick } />
        </div>
    );
  }
}

const Camera  = (props) => (
    <div className={cameraStyles.cameraWrapper}>
    <video id="video" className = {cameraStyles.video} ></video>
    <i id="startButton" className = "fa fa-camera fa-2x" onClick={ props.handleStartClick }></i>
    </div>
);

const Photo = (props) => (
    <div className={photoStyles.photoContainer}>
    <Row className="no-gutters">
    <Col className="col-6">
    <Image id="photo" className="img-fluid" />
    </Col>
    <Col className="col-6">
    <div className={`${photoStyles.scoreContainer}`}>
    <p className={photoStyles.scoreTitle}>Your Happiness</p>
    <p className={photoStyles.score}>77</p>
  </div>
    </Col>
    </Row>

    <Row>
    <Col className="col-12">
    <div id="saveButton" className={photoStyles.uploadButtonContaier}
  onClick = { props.handleSaveClick }>
    <i className = "fa fa-upload fa-2x"></i>
    UPLOAD
  </div>
    </Col>
    </Row>
    </div>
);

export default Capture;
