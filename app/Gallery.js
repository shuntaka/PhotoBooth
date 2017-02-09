import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styles from './main.css';
// import bootstrap from './bootstrap.css'

import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const masonryOptions = {
    transitionDuration: 0
};

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





class Gallery extends Component {
    render() {
      const childElements = this.props.elements.map(function(element){
        return (
            <Col xs={6} md={4} >
            <img className = { styles.article_image } src={element.src} />
            </Col>
        );
      });

      return (
          <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
          {childElements}
        </Masonry>
      );
    }
};

export default Gallery;
