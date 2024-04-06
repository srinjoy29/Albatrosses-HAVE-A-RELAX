import React from 'react';
import Hero from '../Herocomponent/Hero';
import OurService from '../Ourservices/Ourservice';
import Footer from '../Footer/Footer';
import Offer from '../offerpage/OfferPage';
import Workshops from '../workshops/workshops';




const Homepage = () => {
  return (
    <div>
      <Hero />
      
      <Offer/>
      
      <OurService />
      {/* <Workshops/> */}
      <Footer />
    </div>
  );
}

export default Homepage;
