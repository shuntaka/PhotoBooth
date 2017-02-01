import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styles from './main.css';
// import bootstrap from './bootstrap.css'

import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const masonryOptions = {
    transitionDuration: 0
};

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
