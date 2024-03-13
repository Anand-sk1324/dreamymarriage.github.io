import {Link} from 'react-router-dom';
import './style/hero.css';
import './style/style.css'
import logo from "./assets/logo.png";
import React from 'react';
import bg from './assets/hero.png'
function HeroSection({bgImg, text}) {
    return (
        <div id="hero" >            
        <div className="main-photo" style={{backgroundImage: `url(${bgImg})`}}>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    
                    <ul id='links'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <h1>{text}</h1>

                <Link to="/contact-us" id='callToAction'>Contact us</Link>
            </div>
        </div>
    )
  }
  
  export default HeroSection
  