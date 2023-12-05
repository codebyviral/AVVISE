import React from 'react'
import light from '../images/light.png'
import studentimg from '../images/student.png'
import flow from '../images/flow.png'
import time from '../images/time.png'
import errorfree from '../images/icons8-robot-94.png'
import smiley from '../images/icons8-smiling-face-with-smiling-eyes-94.png'
export default function Feature() {
  return (
    <div id='featureDiv' className='outer-ft-div text-center'>
          
    <div className='text-center' id='useCards_01'>
      <p className='text-capitalize'>We are currently under maintenance. Few features might
        not work now. Thank you for cooperating!
      </p>
        <div className='text-center usbt'>
            Use GradieBuddy to
        </div>
      <div className='features'>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={light} alt="" /><br/>
              <br/>  Get Lightning Fast Results
            </div>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={flow} alt="" /><br/>
             <br/>   Streamline Grading Tool
            </div>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={studentimg} alt="" /><br/>
             <br/>   Validate Student Answers
            </div>
      </div>
      <div className='features mt-5'>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={time} alt="" /><br/>
              <br/> Save Time Grading
            </div>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={errorfree} alt="" /><br/>
             <br/>  For Error-Free Calculations
            </div>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={smiley} alt="" /><br/>
             <br/>  Reliable Answer Checker
            </div>
      </div>
    </div>
    </div>
  )
}
