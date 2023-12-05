import React from 'react'
import team from './images/pexels-fauxels-3184302.jpg'
import team2 from './images/team2.jpg'
import viral from './images/mypic.jpg'

export default function About() {
    return (
        <div>
            <div className="aboutus text-uppercase">
                about us
            </div>
            <div className='grading-process'>
                Revolutionizing Grading Process for Students
            </div>
            <div className="about-text">
                At Gradie Buddy, we are a team of passionate individuals dedicated to revolutionize the Grading Process for Students. We strive to create an
                <br/> all-in-one platform where Students and Teachers can use our App to finalize their needs, and succeed together. Our focus is on building a community that fosters creativity, authenticity, and innovation. With our platform, we aim to simplify the process of grading for students and make it accessible to everyone.
            </div>
            <div className='text-center'>
              <img draggable='false' className='team-img' src={team} alt="team" />
                <div className='tagline-2'>
                  Gradie Buddy is worthy, we're making it healthy 
                  & wealthy
                </div>
            </div>
            <div className='team-card'>
                <img draggable='false' className='team-2' src={team2} alt="team" />
                <div className='tg-out-3'>
                <div className="tagline-3">
                Empowering Students to grow
                </div>
                </div>
                </div>
                <div className="src-data">
                <div className='flex-item-01'>
                 <span className='data-i'>100+ <br/></span> 
                  Calculations <br/> Served
                </div>
                <div className='flex-item-02'>
                  <span className='data-i'> 90% <br/></span>
                 Growth <br/> Rate
                </div>
                </div>
                <div className="text-center tagline-4">
                    The Gradie Buddy Family
                </div>
                <div className="text-center">
                <div className="team-members">
                <div>
                <div>
                    <img draggable='false' id="team-mem" src={viral} alt="" /> <br/>
                   <span className='member'> Viral Vaghela
                   <br/>[Founder]</span>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}