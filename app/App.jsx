import React, { Component } from 'react';
import {render} from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import Gallery from './Gallery';
import IPhone from './IPhone.jsx';
import Photo from './Photo.jsx';

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../devices.css/assets/scss/devices.scss";

import appStyles from "./appStyles.css";



class App extends Component {
  handleSaveClick(event) {
    alert('saved');
  }

  render() {
    return (
      <div className = {appStyles.app}>
      <Grid>
      <Row>
      </Row>
      <Row className="align-items-center">
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
