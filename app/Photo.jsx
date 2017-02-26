import React, { Component } from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import photoStyles from './photoStyles.css';

export default class Photo extends Component {
  render() {
    return (
      <Col id="photoContainer" className={`${photoStyles.photoContainer} h-90 mt-5`}>
        <Image id="photo" className="img-thumbnail" src="https://placehold.it/400x300" />
        <Button
          block
          id="uploadButton" className={`mt-1 ${photoStyles.uploadButtonContaier}`}
          onClick={this.props.onClick}
        >
          <i className="fa fa-upload fa-2x" />
          UPLOAD
        </Button>
      </Col>
    );
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
