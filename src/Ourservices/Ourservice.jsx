import React from 'react'
import "./Ourservicestyles.css"
import smallicon from "../Assets/smallright.png"

const OurService = () => {
  return (
    <div className='container_2'>
      <div className="topsection">
        <h1>Mind Care</h1>
        <p>Your Mental Health Is Just As Important As Your Physical Health</p>
      </div>
      <div className="bottomsection">
      <div className="box">
      <img className='right' src={smallicon} alt="iconpng" />
      <h2>Stress Test</h2>
      <p>"Delight in effortless dining with our meal subscription. Enjoy chef-crafted meals, customized to your tastes, delivered hassle-free to your door."</p>

      </div>

      <div className="box">
      <img className='right' src={smallicon} alt="iconpng" />
      <h2>Depression Test</h2>
      <p>"Savor affordable dining with our budget-friendly food options. Enjoy delicious meals tailored to your taste, delivered conveniently to your door."</p>

      </div>

      <div className="box">
      <img className='right' src={smallicon} alt="iconpng" />
      <h2>Anxiety Test</h2>
      <p>"Enjoy effortless dining with our user-friendly meal service. Delicious meals, customized to your preferences, delivered conveniently to your doorstep."





</p>

      </div>
      
      </div>
    </div>
  )
}

export default OurService
