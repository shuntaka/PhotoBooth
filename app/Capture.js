import React, { Component } from 'react';

import styles from './styles.css';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


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

  handleStartClick(event) {
    event.preventDefault();
    this.takePicture();
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

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} xsOffset={2}>
            <Camera handleStartClick={ this.handleStartClick } />
            <canvas id="canvas" hidden></canvas>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Photo handleSaveClick = { this.handleSaveClick } />
          </Col>
        </Row>
      </Grid>

    );
  }
}

const Camera = (props) => (
  <Media>
    <video id="video" className={ styles.picSize }></video>
    <Button bsStyle="primary" bsSize="large" id="startButton" onClick={ props.handleStartClick } >
      Take photo
    </Button>
  </Media>
);

const Photo = (props) => (
    <div>
    <Image id="photo" alt="Your photo" rounded responsive/>
    <Button bsStyle="primary" bsSize="large" id="saveButton" onClick={ props.handleSaveClick } >
      Save Photo
    </Button>
    </div>
);

export default Capture;
