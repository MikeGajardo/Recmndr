import React from 'react'

import feedback from '../../img/feedback/feedback.jpg';
import hear from '../../img/feedback/hear.png';

import "../../styles/feedback.css";

function Feedback() {
  return (
    <div className='container'>
            <div className='d-flex mx-auto justify-content-center disclaimer'><img src={hear} className="hearyou" /></div>
            <div className='d-flex mx-auto justify-content-center disclaimer'><a href='https://forms.gle/jsT5F47mAfg4zrYH9' target="_blank"><img src={feedback} className="feedback" /></a></div>
    </div>
  )
}

export default Feedback