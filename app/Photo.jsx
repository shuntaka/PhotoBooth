import React, { Component } from 'react';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import photoStyles from './photoStyles.css';

export default class Photo extends Component {
  render() {
    return (
      <img id="photo" />
    )
  }
}

/* render() {
   return (
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
   onClick = { this.props.handleSaveClick }>
   <i className = "fa fa-upload fa-2x"></i>
   UPLOAD
   </div>
   </Col>
   </Row>
   </div>
   );
   } */
