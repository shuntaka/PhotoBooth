import React from 'react';
import cameraStyles from './cameraStyles.css';

export default () => (
  <div className={cameraStyles.screenWrapper}>
    <div className={cameraStyles.videoWrapper}>
      <canvas id="canvas" hidden />
      <video id="video" className={cameraStyles.video} />
    </div>
  </div>
);
