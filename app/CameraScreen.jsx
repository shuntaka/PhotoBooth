import React from 'react';
import cameraScreenStyles from './cameraScreenStyles.css';

export default () => (
    <div className={cameraScreenStyles.videoWrapper}>
      <canvas id="canvas" hidden />
      <video id="video" className={cameraScreenStyles.video} />
    </div>

);
