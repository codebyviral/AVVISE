import React from 'react'
import student from '../images/contentwriter.png'
import Globe from '../images/learningexpress-removebg-preview.png'

export default function Container01() {
  return (
    <div>
        <div className='home-01'>
        <div className='banner-01'>
      Grading OMR Tech
    </div>
    <img draggable="false" id='globe-img' src={student} alt="globe-img" />
        </div>
    <p className='tagline'>
    The ultimate time-saver for students. <br/>
    We Use Javascript ✨
    </p>
    </div>
  )
}
