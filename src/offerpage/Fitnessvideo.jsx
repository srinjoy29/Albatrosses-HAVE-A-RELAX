import React from 'react'
import './FitnessVideostyles.css'
import videoBg from '../Assets/videobg1.mp4';

const shortsData = [

{ 
  index: 1,
  vidurl: 'https://www.youtube.com/embed/QWEFavFQR_w?si=wF0nabW8gRbNQBiQ'
},
{ 
  index: 2,
  vidurl: 'https://www.youtube.com/embed/uhuEzQ7E44U?si=q74WWOSm6alrp8Wj'
},
{ 
  index: 3,
  vidurl: 'https://www.youtube.com/embed/ZW69WLs-Ags?si=tCfRSbHsiFIDyxQZ'
}




]

const Fitnessvideo = () => {
  return (
    <div className='shorts_container'>
      <div className='shorts_title'>
        <h1>Start Your Exercise
in Driving<br/> a
Startup?</h1>
      </div>
      <div className='video-container1'>
      {
        shortsData.map((item, index) => (
          <div className='video-item' key={index}>
          <iframe
  src={item.vidurl}
  title='shorts'
  width="400"
  height="230" // Adjusted height to maintain 16:9 aspect ratio
  style={{ aspectRatio: '16/9' }} // CSS style to maintain aspect ratio
  frameborder="4"
  allowfullscreen
/>
            
          </div>
        ))
      }
     
    
      </div>
      <div className='after_video'>
      <h1>Interested ?</h1>
      <a href='https://www.youtube.com/@bizunboxed23'><p> View More...</p></a>

      </div>
    </div>
  )
}

export default Fitnessvideo

