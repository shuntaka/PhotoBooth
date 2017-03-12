import React from 'react';


class PhotoBooth extends React.Component {
  render() {
    return (
      <div>
        I'm phtobooth, {this.props.score}
      </div>
    );
  }
}

export default PhotoBooth;
