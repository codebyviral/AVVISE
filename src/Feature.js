import React from 'react'
import light from './images/light.png'
import CSS from './App.css'
import studentimg from './images/student.png'
import flow from './images/flow.png'
import thunder from './images/icons8-thunder-100.png'
import time from './images/time.png'
import errorfree from './images/icons8-robot-94.png'
import smiley from './images/icons8-smiling-face-with-smiling-eyes-94.png'
export default function Feature() {
  return (
    <div id='featureDiv' className='outer-ft-div text-center'>
          <div className="text-center">
          <div className='tag-div mt-5'>  <p data-aos={"fade-up"} className='text-nowrap fw-bold'>
    The ultimate time-saver for students.
    We Use Javascript ✨
    </p></div>
          </div>
    <div className='text-center' id='useCards_01'>
      <p  data-aos={"zoom-in"}  className='text-capitalize mt-3'>We are currently under maintenance. Few features might
        not work now. Thank you for cooperating!
      </p>
        <div  data-aos={"zoom-in"}  className='text-center usbt'>
            What is AVVISE?
        </div>
        <p className='wa-para fs-4'>AVVISE stands for <b>Answer Validator and Verification Intelligence for Student Evaluation
</b> is an innovative answer validation tool meticulously crafted to aid individuals in determining the correctness of their responses. Its user-friendly interface allows students, teachers, and academic institutions to input the correct answer option alongside their attempted answers. The tool then swiftly processes this information, providing a comprehensive validation report.</p>
      <div hidden className='features'>
            <div className='ft-card-01 text-center'>
                <img draggable="false" className='light-img' src={thunder} alt="" /><br/>
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
      <div hidden className='features mt-5'>
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
