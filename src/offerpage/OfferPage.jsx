import React from "react";
import "./offer.css";
import { Link } from "react-router-dom";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";
import c4 from "../Assets/c4.png";
import c5 from "../Assets/c5.png";
import c6 from "../Assets/c6.png";


const Offer = () => {
  return (
    <>
      <div className="Fitnesscontainer">
        <div className="firstsection">
          <div className="headings1">
            <h1>Keep Going </h1>
            <p>
              It's a reminder to nurture your mental, physical, and emotional
              well-being, fostering resilience and inner peace amidst life's
              demands and challenges.
            </p>
          </div>
          <div className="button1">
            <Link to="/Login">
              <button className="btn1">Join Us</button>
            </Link>
          </div>
        </div>
        <div className="cardoffer">
        <div className="part1">
          <ul className="mini-container">
            <li>
              <img className="icon_small" src={c1} width="55" alt="c1" />
              <p>Stretch</p>
            </li>
            <li>
              <img className="icon_small" src={c2} width="55" alt="c2" />
              <p>Plank</p>
            </li>
            <li>
              <img className="icon_small" src={c3} width="55" alt="c3" />
              <p>Push-up</p>
            </li>
            
          </ul>
        </div>
        <div className="part2">
          <ul className="mini-container">
            <li>
              <img className="icon_small" src={c4} width="55" alt="c5" />
              <p>Pull-up</p>
            </li>
            <li>
              <img className="icon_small" src={c5} width="55" alt="c6" />
              <p>yoga</p>
            </li>
            <li>
              <img className="icon_small" src={c6} width="65" alt="c8" />
              <p>Burpees</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
