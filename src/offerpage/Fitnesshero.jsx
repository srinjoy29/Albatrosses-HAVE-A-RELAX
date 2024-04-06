import React from 'react';
import videoBg from '../Assets/videobg1.mp4';
import './FitnessheroStyles.css'; // Assuming you have a CSS file for styling

const Fitnessheropage = () => {
  return (
    <div className='main'>
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted className="video-bg" />
        <div className="content">
          <h1>Have A Relax</h1>
          <p>Calm Down & Start Your Exercises</p>
        </div>
      </div>
    </div>
  );
}

export default Fitnessheropage;
