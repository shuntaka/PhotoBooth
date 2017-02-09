import React, { Component } from 'react';
import {render} from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Gallery from './Gallery';
import IPhone from './IPhone.jsx';
import Photo from './Photo.jsx';

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../devices.css/assets/scss/devices.scss";

import appStyles from "./appStyles.css";



class App extends Component {
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
      <div className = {appStyles.app}>
      <Grid>
      <Row>
      </Row>
      <Row className={`${appStyles.firstRow} align-items-center`}>
        <div className ={appStyles.shutterButton}>
          <i id="startButton" className = {`fa fa-camera fa-3x`} onClick={ this.handleStartClick }></i>
        </div>
        <IPhone />
      </Row>
      <Row>
        <Photo handleSaveClick = {this.handleSaveClick}/>
      </Row>
      </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
