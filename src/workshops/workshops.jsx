import React from "react";
import { Link } from "react-router-dom";
import "./workshopstyles.css";

const Workshops = () => {
  return (
   
      <div className="fullcontainer">
        <div className="headings2">
          <h1>Remedies</h1>
          <p>
            It's a reminder to nurture your mental, physical, and emotional
            well-being, fostering resilience and inner peace amidst life's
            demands and challenges.
          </p>
        </div>
        <div className="video-section">

        </div>

        <div className="button1">
          <Link to="/Login">
            <button className="btn1">Join Us</button>
          </Link>
        </div>
      </div>
   
  );
};

export default Workshops;
