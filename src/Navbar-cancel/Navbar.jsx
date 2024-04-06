import React from 'react'
import logoBengalithali from "../Assets/logo.png"
import "./Nav.css"


const Navbar = () => {
  return (
    <div className='nav_container'>
     <div className="navlogo">
     <img width="170" height="80" className='img-BT' src={logoBengalithali} alt="Logo" />
     </div>
     <div className="nav_items">
      <ul>
        <li>Hotels</li>
        <li>Subscription</li>
        <li>About Us</li>
      </ul>
     </div>
    </div>
  )
}

export default Navbar
