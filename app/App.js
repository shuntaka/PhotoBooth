import React, { Component } from 'react';
import {render} from 'react-dom';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import Gallery from './Gallery';
import Capture from './Capture';

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
  render() {
    return (
        <div className={appStyles.appContainer}>
        <Grid>
        <Row>
        </Row>
        <Row className="align-items-center">
        <Capture />
        </Row>
        </Grid>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<Gallery elements={elementsList}/>, document.getElementById('root'));
