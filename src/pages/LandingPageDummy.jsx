import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './LandingPage.styled'
import { useAuth } from '../context/customAuth'
import { getUserInfo } from '../apis/users'

const LandingPageDummy = () => {

  const { login, entityInfo } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if(!entityInfo)
      return;

    getUserInfo(entityInfo.address)
      .then(profile => {
        console.log(profile);
        // Signup possible
        if(profile.birthdate == "0"){
          navigate('/signup');
        } else {
          navigate('/home');
        }
      });

  }, [entityInfo])


  return (
    <div>
      <Button>
        Sign up
      </Button>
    </div>
  )
}

export default LandingPageDummy