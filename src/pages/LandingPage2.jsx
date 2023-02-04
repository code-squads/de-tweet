import React from 'react'
import Navbar from "../components/navbar/navbar";
import './LandingPage2.css'
import LandingSvg from "../assets/LandingSvg.svg"

const LandingPage2 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='landing-page'>
            <div className='landing-container'>
                <div className='landing-svg'> 
                    <img src={LandingSvg} alt=""/>
                </div>
                <div className='primary-landing-text'>
                    A Decentralized Platform to express your opinions
                </div>
                <div className='secondary-landing-text'>
                    Take back control of your social media presence with a decentralized Twitter
                </div>
                <button className='getting-started-btn'>Get Started</button>
            </div>
      </div>
    </div>
  )
}

export default LandingPage2;