import React from 'react'
import "./exercisestyles.css"
import stretch from "../Assets/stretch.mp4";
import pullups from "../Assets/pullups.mp4";
import pushup from "../Assets/pushup.mp4";
import mountainclimbing from "../Assets/mountainclimbing.mp4";
import jumpingjacks from "../Assets/jumpingjacks.mp4";
import burpees from "../Assets/burpees.mp4";
const Exercisevideo = () => {
  return (
    <div className='video-containerfull'>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={stretch} types="video/mp4" />
        </video>
        <h2>Stretching Exercise</h2>
      </div>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={pullups} types="video/mp4" />
        </video>
        <h2>Pull Ups</h2>
      </div>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={pushup} types="video/mp4" />
        </video>
        <h2>Push Up Exercise</h2>
      </div>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={mountainclimbing} types="video/mp4" />
        </video>
        <h2>Mountain Climb Exercise</h2>
      </div>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={jumpingjacks} types="video/mp4" />
        </video>
        <h2>Jumping Jacks Exercise</h2>
      </div>
      <div className='videocard'>
        <video width="320" height="250" controls>
          <source src={burpees} types="video/mp4" />
        </video>
        <h2>Jumping Jacks Exercise</h2>
      </div>
    </div>
  )
}

export default Exercisevideo
