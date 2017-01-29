import React from 'react';
import {render} from 'react-dom';
import Gallery from './Gallery';

let elementsList = [
  {
    src:'http://placekitten.com/g/400/300'
  }
];

render(<Gallery elements={elementsList}/>, document.getElementById('root'));
