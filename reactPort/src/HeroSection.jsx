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
                            <a href="/" className='hoverable'>Home</a>
                        </li>
                        <li>
                            <a href="/services" className='hoverable'>Services</a>
                        </li>
                        <li>
                            <a href="/contact-us" className='hoverable'>Contact Us</a>
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
  