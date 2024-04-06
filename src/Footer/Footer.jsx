import React from 'react';
import "./Footerstyles.css";
import logoBengalithali from "../Assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footercontainer'>
      <div className="imgsection">
        <img className='logofooter' src={logoBengalithali} alt="Logo" />
      </div>
      <div className="textsection">
        <div className="socials">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="contact">
          <h2>Contact us - 6295767707</h2>
        </div>
        <div className="copyright">
          <div>
            &copy; {new Date().getFullYear()} Copyright:
            Bengali Thali {" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
