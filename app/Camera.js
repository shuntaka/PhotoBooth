import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import styles from './styles.css';
import cameraStyles from './cameraStyles.css';



class Camera extends Component {
  render(props) {
    alert(props);
    return (
      <Row>
      <Col xs={12} md={8}>
      <video id="video" className={ cameraStyles.picSize }></video>
        <i className=
        {`${cameraStyles['gi-4x']} glyphicon glyphicon-camera`} id="startButton"
      onClick={ props.handleStartClick }>
      </i>
      </Col>
        </Row>
    );
  }

}

export default Camera;
