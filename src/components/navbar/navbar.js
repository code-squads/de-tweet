import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { getUserInfo } from "../../apis/users";
import Logo from '../../assets/Logo.svg'
import { useAuth } from '../../context/customAuth'

const NavbarContainer = styled.div`
    position: relative;
    width: 100%;
    height: 55px;
    background: #FFFFFF;
    border-bottom: 0.7px solid #E1E1E1;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-sizing: border-box;
    padding: 19px 60px;
    align-items: center;
    z-index: 10;
`

const NavbarIcon = styled.img`
    width: 24px;
`

const AppName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #404040;
    margin-left: 15px;
    cursor: pointer;
`

const Login = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #1977F2;
    cursor: pointer;
    margin-left: auto;
`

const Signup = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 24px;
    background: #1977F2;
    box-shadow: 0px 8px 24px rgba(241, 244, 251, 0.25);
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: 65px;
    cursor: pointer;
`

const Disconnect = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 24px;
    background: #1977F2;
    box-shadow: 0px 8px 24px rgba(241, 244, 251, 0.25);
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: auto;
    cursor: pointer;
`

const Navbar = () => {
    const navigate = useNavigate()
    const { entityInfo } = useAuth()
    const [loggedInState, setLoggedInState] = useState(false)
    const [loggedInState2, setLoggedInState2] = useState(false)
    

    const onSignupClickHandler = () => {
        navigate('/signup')
    }

    const onAppNameClickHandler = () => {
        if(loggedInState2) 
            navigate('/home')
        else
            navigate('/')
    }

    const onLoginClickHandler = () => {
        if(entityInfo) {
            getUserInfo()
            .then(profile => {
                navigate('/home')
            })
        }
        else {
            toast.error('No Previous Account Found!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        
    }

    useEffect(() => {
        if(!entityInfo) {
            setLoggedInState(false)
        }
        else {
            getUserInfo(entityInfo.address)
            .then(profile => {
                if(profile.birthdate != '0') {
                    setLoggedInState2(true)
                    setLoggedInState(true)
                }
                else
                    setLoggedInState2(false)
            })
            setLoggedInState(true)
        }
    }, [entityInfo]) 

    return (
        <NavbarContainer>
            <NavbarIcon src={Logo}/>
            <AppName onClick={onAppNameClickHandler}>DeTweet</AppName>
            {!loggedInState && <Login onClick={onLoginClickHandler}>Login</Login>}
            {!loggedInState && <Signup onClick={onSignupClickHandler}>Sign Up</Signup>}
            {loggedInState && <Disconnect>Disconnect &#9679;</Disconnect>}
        </NavbarContainer>
    )
}

export default Navbar;