import React from 'react'
import Navbar from "../components/navbar/navbar";
import LandingSvg from "../assets/LandingSvg.svg"
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
import { useAuth } from '../context/customAuth';
import { getUserInfo } from '../apis/users';
import { toast } from 'react-toastify';

const LandingPage = () => {
  const navigate = useNavigate();
  const { entityInfo } = useAuth()
  const onLoginClickHandler = () => {
    if(entityInfo) {
      getUserInfo()
      .then(profile => {
        console.log(profile)
      })
    }
    else {
      toast.error()
    }
  }
  return (
    <div>
      <Navbar/>
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
                <button className='getting-started-btn' onClick={() => navigate('/signup')}>
                  Get Started
                </button>
            </div>
      </div>
    </div>
  )
}

export default LandingPage;