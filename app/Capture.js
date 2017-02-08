import React, { Component } from 'react';
// import Camera from './Camera.js';

import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';

import cameraStyles from './cameraStyles.css';
import photoStyles from './photoStyles.css';

class Capture extends Component {
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
        <Grid>
        <Camera handleStartClick={ this.handleStartClick } />
        <canvas id="canvas" hidden></canvas>
        <Photo handleSaveClick = { this.handleSaveClick } />
        </Grid>
    );
  }
}
const Camera  = (props) => (
    <div className={cameraStyles.cameraContainer}>
    <Row>
    <Col className="col-12">
    <video id="video" className = {cameraStyles.video} ></video>
    </Col>
    </Row>
    <Row>
    <Col className="col-12">
    <div id="startButton" className={cameraStyles.cameraButtonContainer}
  onClick={ props.handleStartClick }
    >
    <i className = "fa fa-camera fa-2x"></i>
    </div>
    </Col>
    </Row>
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
