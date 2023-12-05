import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Demo from './Demo';
import React, { useState } from 'react';
import Enter from './Enter'
import About from './About';
import 'aos/dist/aos.css';
import Footer from './Footer';
import Blog from './Blog';
import AOS from 'aos';
import{
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FiftyProbes from './FiftyProbes';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Demo" element={<Demo/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/FiftyProbes" element={<FiftyProbes/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
