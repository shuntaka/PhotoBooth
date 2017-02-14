import React from 'react';

import {Row, Col, Button} from 'react-bootstrap';
import menuStyles from './menuStyles.css';
// export default class IPhone extends Component {
export default (props) => (
    <Row className="h-25">
      <Col md={4} className={menuStyles.logo} />
      <Col md={4} className={menuStyles.linkStudio} />
      <Col md={4} className={menuStyles.linkGallery} />
    </Row>
);
