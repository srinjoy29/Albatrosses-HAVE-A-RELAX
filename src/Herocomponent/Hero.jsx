import React from "react";
import "./Herostyles.css";
import logoBengalithali from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Herosection">
      <div className="nav_container">
        <div className="navlogo">
          <img
            width="170"
            height="80"
            className="img-BT"
            src={logoBengalithali}
            alt="Logo"
          />
        </div>
        <div className="nav_items">
          <ul>
            <li><Link toFitness</li>
            <li>Mind Care</li>
            <li>Remedies</li>
          </ul>
        </div>
        <div class="dropdown_menu">
            <li class="dropdown">
              Sign Up
              <div class="dropdown-content">
                <Link to="/hotelregister">User Sign Up</Link>
                <Link to="/userregister">Admin Sign Up</Link>
              </div>
            </li>
          </div>
        
      </div>
      <div className="headings">
        <h1>Keep Going </h1>
        <p>
          <h2>Keep Calm and Prioritize Self Care</h2> <br /> It's a reminder to
          nurture your mental, physical, and emotional well-being, fostering
          resilience and inner peace amidst life's demands and challenges.
        </p>
      </div>
      <div className="button1">
        <Link to="/Login">
          <button className="btn1">Join Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
