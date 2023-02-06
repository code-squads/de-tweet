import React from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/navbar/navbar";
import LandingBg from "../assets/LandingBg.png";

import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className='landing-page'>
            <div className='landing-container'>
                <div className='landing-svg'> 
                    <img src={LandingBg} alt=""/>
                </div>
                <div className='primary-landing-text'>
                    A Decentralized Platform to express your opinions
                </div>
                <div className='secondary-landing-text'>
                    Take back control of your social media presence with a decentralized Twitter
                </div>
                <button className='getting-started-btn' onClick={() => navigate('/signup')}>
                  Get Started
                </button>
            </div>
      </div>
    </div>
  )
}

export default LandingPage;