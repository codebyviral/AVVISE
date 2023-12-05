import React from 'react'

export default function Footer() {
    return (
        <div>
            <br/><br/>
            <footer id="footer-cooler" class="text-white py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h4>About Us</h4>
                            <p>
                                Thank you for choosing our App. We hope you find it helpful and wish you all the best in your exams!
                            </p>
                        </div>
                        <div class="col-md-4">
                            <h4>Contact Us</h4>
                            <p>
                                <a class='btn btn-outline-light' href="mailto:gradingomrtech@gmail.com">info@gradingomr.tech</a>
                            </p>
                            <p id='cell' onclick="cell()" class="btn btn-outline-light">Call Us</p>
                        </div>
                        <div class="col-md-4">
                            <h4>Follow Us</h4>
                            <a href="https://instagram.com/codebyviral" class="btn btn-outline-light">
                                <i class="fab fa-facebook-f"></i>Instagram</a>
                        </div>
                    </div>
                    <hr/>
                    <p class="text-center copyright">&copy; 2023 GradieBuddy is under Apache License 2.0</p>
                </div>
                <div class="end text-center mt-4">
                    Made with 🤍 By ~ Viral Vaghela
                </div>
            </footer>
        </div>
    )
}
