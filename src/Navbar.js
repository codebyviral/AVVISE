import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  const navDark = document.querySelector("#darkOn");
  if(navDark){
    navDark.addEventListener("click",function(){
        console.log("hi")
        document.getElementById("bg-custom").style.backgroundColor="#000";
    });
  }
//  document.getElementById("darkOn").addEventListener("click",function(){
//     document.getElementById("bg-custom").style.backgroundColor="#000";
//  });
export default function Navbar() {
    const {user,loginWithRedirect, isAuthenticated, logout} = useAuth0();
    return (
        <nav data-aos={'fade-down'} id="bg-custom" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">AVVISE</a>
                <button id="txt-white" class="navbar-toggler text-white btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler- text-white">☰</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/app">App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <button id='darkOn' className="nav-link" href="">Dark Mode</button>
                        </li>
                        {
          isAuthenticated ? <li className='nav-item'><button className='login-btn' onClick={e=>logout()}>Logout</button> </li> 
          : <li className='nav-item'><button className='login-btn' onClick={e => loginWithRedirect()}> Login</button></li> 
        }
                    </ul>
                </div>
            </div>
        </nav>
        
    )
    
}
