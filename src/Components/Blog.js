import React from 'react'
import viral from '../images/aboutme.jpg'
import like from '../images/like.png'
import comment from '../images/comment.png'
import save from '../images/save.png'

export default function Blog() {
    const following = () => {
        document.getElementById('follow').innerText = `Following`
    }
    const likeCounts = () => {
        const existingLike = document.getElementById('count-likes').innerText
        const newCount = parseInt(existingLike) + 1;
        document.getElementById('count-likes').innerText = newCount
    }
    return (
        <div>
            <div className="B-heading text-center">
                How To Use Gradie-buddy WebApp for 
                                        Beginners in 2023 🚀
            </div>
            <div className="text-center apar">
                <div className="apar-items">
                    <img class='apar-viral'
                        src={viral}
                        alt=""/>
                    <span className='apar-viral-text'>Viral Vaghela |
                    </span>
                    <span className='apar-f-link'>
                        <a id='follow'
                            onClick={following}
                            className='follow-link'
                            href="#">Follow</a>
                    </span>
                </div>
            </div>
            <div className="B-items">
                <hr/>
                <div className="apar-2 text-center">
                    <img onClick={likeCounts}
                        src={like}
                        alt=""
                        className="like-0"/><span id='count-likes' className="mt-2 mx-1">21</span>
                    <img src={comment}
                        alt=""
                        className="like"/>
                    <img src={save}
                        alt=""
                        className="like"/>
                </div>
                <hr/>
            </div>
            <div className="blog-asset text-center">
                Gradiebuddy features a lightning fast calculations for students and teachers 
                for their answer keys and validations. Our Team is working on developing a prototype which will help organizations
                to get all OMR grading services just on Web with more powerful and advanced features that too just at a cost of 0$ as for now :)
                We believe in providing excellent solutions to real life problems. Gradiebuddy has been used by over 3 Organizations and
                more than 100 students. Specially for saving time. If you believe you can contribute to us by providing with an idea or suggestion
                we would love to hear from you 💌
                <h3 className='mt-3'> Getting started with Gradie-Buddy 😉</h3>
                    Gradie-Buddy is too easy to use. You can try out on demo for the first time. The Demo will provide you with an 
                    8 questions and custom marking scheme. Users can select their preferred marking system based on their choice and go on.
                   <div className="text-center text-primary">
                        x/y : x = for each correct & y = for each incorrect. <br />
                        Custom : might be different...
                    </div> <br /> Below is a table of competitive exams in India and their marking systems:
                    <div id='msTable' className="text-center mx-auto">
                        <table>
                            <tr>
                            <th>Exam Name:</th>
                            <th>Preferred Marking Scheme:</th>
                            </tr>
                            <tr>
                                <td>IIT JEE Advanced</td>
                                <td>7.5/1.5</td>
                            </tr>
                            <tr>
                                <td>CAT</td>
                                <td>3/0</td>
                            </tr>
                            <tr>
                                <td>CMAT</td>
                                <td>1.25/0.25</td>
                            </tr>
                            <tr>
                                <td>UPSC Mains</td>
                                <td>2.5/0.83</td>
                            </tr>
                            <tr>
                                <td>MAT</td>
                                <td>2/0.5</td>
                            </tr>
                            <tr>
                                <td>JEE Mains | NEET UG | AIIMS</td>
                                <td>4/1</td>
                            </tr>
                            <tr>
                                <td>UPSEE | BITSAT</td>
                                <td>3/1</td>
                            </tr>
                            <tr>
                                <td>State Board : Higher Secondary Schools</td>
                                <td>1/0 | Custom</td>
                            </tr>
                            <tr>
                                <td>Competitive Exam State Level</td>
                                <td>1/0.25 | Custom</td>
                            </tr>
                        </table>
                    </div>
                <h3 className='mt-3'>...</h3>
             ...   </div>
        </div>
    )
}
