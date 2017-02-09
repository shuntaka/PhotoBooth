import React, { Component } from 'react';
import {render} from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import Gallery from './Gallery';
import IPhone from './IPhone.jsx';

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../devices.css/assets/scss/devices.scss";

import appStyles from "./appStyles.css";


let elementsList = [
  {
    src:'https://p931z2nb6eo1jytzj2ufrzyoiz-wpengine.netdna-ssl.com/mindshift/wp-content/uploads/sites/23/2017/01/Personalized-1020x680.jpg'
  },
  {
    src:'https://assets.entrepreneur.com/content/3x2/1300/20170118203215-GettyImages-151082452.jpeg'
  },
  {
    src:'http://www.incimages.com/uploaded_files/image/970x450/getty_168211783_200014342000928054_130027.jpg'
  },
  {
    src:'http://www.incimages.com/uploaded_files/image/970x450/getty_499424066_129667.jpg'
  },
  {
    src:'https://p931z2nb6eo1jytzj2ufrzyoiz-wpengine.netdna-ssl.com/mindshift/wp-content/uploads/sites/23/2017/01/Personalized-1020x680.jpg'
  },
  {
    src:'https://assets.entrepreneur.com/content/3x2/1300/20170118203215-GettyImages-151082452.jpeg'
  },
  {
    src:'http://www.incimages.com/uploaded_files/image/970x450/getty_168211783_200014342000928054_130027.jpg'
  },
  {
    src:'http://www.incimages.com/uploaded_files/image/970x450/getty_499424066_129667.jpg'
  },

];

// let elementsList = [
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   },
//   {
//     src: 'http://placekitten.com/g/400/300'
//   }
// ]

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
        <Row>
        </Row>
        <Row className="align-items-center">
        <IPhone handleStartClick={ this.handleStartClick }/>
        </Row>
        </Grid>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<Gallery elements={elementsList}/>, document.getElementById('root'));
