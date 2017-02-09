import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import cameraStyles from './cameraStyles.css';

export default class Camera extends Component {


  render(props) {
    return (
      <div className={cameraStyles.screenWrapper}>
        <div className={cameraStyles.videoWrapper}>
          <canvas id="canvas" hidden></canvas>
          <video id="video" className = {cameraStyles.video} >
          </video>
        </div>
      </div>
    );
  }
}
