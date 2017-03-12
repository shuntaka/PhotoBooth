import React from 'react';
import { Link } from 'react-router';

// {React.cloneElement(this.props.children, this.props)}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">SmileGram</Link>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
export default Main;
