import React from 'react'
import {Link} from "react-router-dom";
import studio2 from '../images/demo-cartoon-student.png'
import demo from './Demo';
import FiftyProbes from './FiftyProbes';
const FiftyProbesSwitch  = () =>{window.location.href="./FiftyProbes"}
const Demo = () =>{window.location.href="./Demo"}
export default function UseCards() {
    return (
        <div className='outer-card'>
            <div className="useto-cards">
                <div class="card-01">
                    <div class="content-01">
                        <p class="heading text-capitalize">
                         Demo for 
                        beginners
                        </p>
                        <p class="para-01 text-capitalize">
                        Features a demo of a 4/1 negative marking system calculator, now available for users for use
                        </p>
                        <button onClick={Demo} class="btn-01">
                            Try Now</button>
                    </div>
                </div>
                <div class="card-01">
                    <div class="content-01">
                        <p class="heading text-capitalize">
                        50  Probes of your choice
                        </p>
                        <p class="para-01 text-capitalize">
                        Features calculation based on your selection of negative marking , now available for users for use
                        </p>
                        <button onClick={FiftyProbesSwitch}  class="btn-01">Read more</button>
                    </div>
                </div>
                <div class="card-01">
                    <div class="content-01 text-capitalize">
                        <p class="heading">75  Probes of your choice
                        </p>
                        <p class="para-01 text-capitalize">
                        Features calculation based on your selection of negative marking , now available for users for use
                        </p>
                        <button class="btn-01">Read more</button>
                    </div>
                </div>
                <div class="card-01">
                    <div class="content-01 text-capitalize">
                        <p class="heading">90 Probes of your choice
                        </p>
                        <p class="para-01 text-capitalize">
                        Features calculation based on your selection of negative marking , now available for users for use
                        </p>
                        <button class="btn-01">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
