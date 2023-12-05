import React from 'react'
import cross from '../images/cross.png'
import {calc} from './Calc'
export default function All_Probes() {
  const toastHide = () => {
    document.getElementById('toast-message').hidden = true
}
  return (
    <div>
             <div>
            <div id="toast-message">
                You chose 50 Probes with custom Marking Scheme &nbsp;
                <img style={
                        {
                            width: '24px',
                            cursor: 'pointer'
                        }
                    }
                    onClick={toastHide}
                    src={cross}
                    alt="cross-img"/>
            </div>
            <div className="aspect-container">
                <div className="left-container text-center">
                    <div className="input-bars text-center mx-auto">
                        <div className="input-aspect text-center mx-auto">
                            <p className='mt-3 top-indicator onholder-text'>Your-Ans-Key</p>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    1
                                </span>
                                <input id="ui1" placeholder='Your-1' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    2
                                </span>
                                <input id="ui2" placeholder='Your-2' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    3
                                </span>
                                <input id="ui3" placeholder='Your-3' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    4
                                </span>
                                <input id="ui4" placeholder='Your-4' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    5
                                </span>
                                <input id="ui5" placeholder='Your-5' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    6
                                </span>
                                <input id="ui6" placeholder='Your-6' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    7
                                </span>
                                <input id="ui7" placeholder='Your-7' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    8
                                </span>
                                <input id="ui8" placeholder='Your-8' className='input-ap' type="text"/>
                            </div>
                        </div>
                        {/* second colum - on row */}
                        <div className="input-aspect text-center mx-auto">
                            <p className='mt-3 top-indicator onholder-text'>Real-Ans-Key</p>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    1
                                </span>
                                <input id='u1' placeholder='Real-1' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    2
                                </span>
                                <input id='u2' placeholder='Real-2' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    3
                                </span>
                                <input id='u3' placeholder='Real-3' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    4
                                </span>
                                <input id='u4' placeholder='Real-4' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    5
                                </span>
                                <input id='u5' placeholder='Real-5' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    6
                                </span>
                                <input id='u6' placeholder='Real-6' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    7
                                </span>
                                <input id='u7' placeholder='Real-7' className='input-ap' type="text"/>
                            </div>
                            <div className="input-flexbox">
                                <span className="integer-indicator">
                                    8
                                </span>
                                <input id='u8' placeholder='Real-8' className='input-ap' type="text"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="right-container text-center mx-auto">
                    <h3 className='mt-3 aspect-text'>
                        :: Grade ::</h3>
                    <div id="sync-io" className="sync-io text-center text-danger fw-bold mx-auto mt-4 text-capitalize">
                        syncing.<span className='prgs-sync'>..</span>
                    </div>
                    <div className="grade-items mx-auto text-center opt-out-box">
                        <div id="demo-over" className="sync-io text-center mx-auto">
                            <div class="spinner-border text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <br/>
                            <div  id="filled-details">
                            </div>
                            <div id="real-time-sync">
                                {/* Syncing in progress */} </div>
                        </div>
                        <div id="filled-details"></div>
                    </div>
                </div>
            </div>
            <div className='text-center' id="Scheme-Selection">
            <div className="text-center mx-auto mt-4  text-primary">
                Choose Your Marking Scheme Below
            </div>
                <div class="radio-inputs">
                    <label class="radio">
                        <input value='4/1' type="radio" name="radio"/>
                        <span class="name ms-button">4/1</span>
                    </label>
                    <label class="radio">
                        <input value='1/0' type="radio" name="radio"/>
                        <span class="name ms-button">1/0</span>
                    </label>

                    <label class="radio">
                        <input value='1/0.25' type="radio" name="radio"/>
                        <span class="name ms-button">1/0.25</span>
                    </label>

                    <label class="radio">
                        <input value='3/1' type="radio" name="radio"/>
                        <span class="name ms-button">3/1</span>
                    </label>

                    <label class="radio">
                        <input value='4/0' type="radio" name="radio"/>
                        <span class="name ms-button">4/0</span>
                    </label>
                </div>
            </div>

            {/* Bootstraps Modal */}
            <div className="text-center">
                <button data-bs-target="#exampleModal" type='button' data-bs-toggle='modal' id='grade-btn'>Grade</button>
                <div className="display-bottom"></div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you ready?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure ? Any mistake 
                            might lead to false results/ouput. You agree that you choosed correct 
                            marking scheme.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={calc}
                                className="btn btn-danger"
                                data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
