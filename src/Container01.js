import React from 'react'
import student from './images/contentwriter.png'
import avvise from './images/pexels-burst-374631.jpg'
import 'aos/dist/aos.css';
import { Aos } from 'aos'
import Globe from './images/learningexpress-removebg-preview.png'

export default function Container01() {
  return (
    <div>
    <div>
        <div data-aos={"fade-right"} className='home-01'>
        <div className='banner-01'>
      AVVISE <p className="fs-3">Answer Validator For Students</p>    
    </div>
    <div data-aos={'zoom-in-up'}>
    <img className='avvise-img-01' draggable="false" id='globe-img' src={avvise} alt="globe-img" />

    </div>
        </div>

    </div>
    </div>
  )
}
