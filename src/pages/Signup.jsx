import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import sallySvg1 from "../assets/SalySvg1.svg";
import sallySvg2 from "../assets/SalySvg2.svg";
import linkSvg from "../assets/LinkSvg.svg";
import Navbar from "../components/navbar/navbar";
import { useAuth } from "../context/customAuth";
import { getUserInfo, userRegistration } from '../apis/users'

import "./Signup.css";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [description, setDescription] = useState("");
  const [account, setAccount] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const { entityInfo, login } = useAuth();
  const onConnect = () => {
    login();
  }


  useEffect(() => {
    if(!entityInfo)
      return;

    getUserInfo(entityInfo.address)
      .then(profile => {
        console.log(profile);
        // Signup possible
        if(profile.birthdate != "0"){
          navigate('/profile');
        }
      })
    
  }, [entityInfo]);


  // const [valueObj, setValueObj] = useState({
  //   fname: '',
  //   lname: '',
  //   account: '',
  //   gender: '',
  //   description: ''
  // });

  // const handleChange = (event) => {
  //   setValueObj({ ...valueObj, [event.target.fname]: event.target.value});
  // };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };
  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCreate = () => {
    const bdate = new Date('10-05-1994');
    const userObject = {
      fName: fname,
      lName: lname,
      bio: description,
      avatar: 'boy',
      city: 'Mum',
      country: 'India',
      birthdate: Number(new Date('10-05-1994')/1000),
      gender: gender,
    }

    console.log(userObject);
    userRegistration(account, userObject);
    
    setTimeout(() => {
      console.log("Redirect to profile !");
    }, 10000);
  };


  return (
    <div className="signup">
      <Navbar></Navbar>
      <div className="flex-container">
        {/* First Flex container */}

        <div className="flex-1">
          <div className="sally-img2">
            <img src={sallySvg2} alt="" />
          </div>
          <div className="sally-img1">
            <img src={sallySvg1} alt="" />
          </div>
          <div className="title">
            <div className="primary-title">Lets create an account</div>
            <div className="secondary-title">
              Detweet is a decentralised platform to express your opinions
              without anyone's restriction
            </div>
          </div>
        </div>

        {/* Flex Container 2 */}

        <div className="flex-2">
          <div className="signup-form">
            <div className="first-name left-container">
              <div className="label">First Name</div>
              <div className="input">
                <input
                  type="text"
                  value={fname}
                  onChange={handleFnameChange}
                  className="name-input"
                />
              </div>
            </div>
            <div className="last-name ">
              <div className="label">Last Name</div>
              <div className="input">
                <input
                  type="text"
                  value={lname}
                  onChange={handleLnameChange}
                  className="name-input"
                />
              </div>
            </div>

            <div className="first-name left-container">
              <div className="label">Select Blockchain Account</div>
              <select
                className="account-input"
                required
                id="gender"
                name="gender"
                value={account}
                onChange={handleAccountChange}
              >
                <option value="" disabled selected hidden></option>
                { entityInfo && <option value={entityInfo.address}>{ entityInfo.address }</option> }
              </select>
            </div>
            <div className=" label">
              <button type="submit" className="connect-btn " onClick={onConnect}>
                <img src={linkSvg} className="link-svg" alt="" />
                Connect
              </button>
            </div>
            <div className="gender left-container">
              <div className="label">Gender</div>
              <select
                className="dropdown"
                required
                id="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="" disabled selected hidden></option>
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Other</option>
              </select>
            </div>
            <div>
              <div className="label">Date</div>
              <div className="">
                <input type="text" className="name-input" />
              </div>
            </div>
            <div>
              <div className="label">Short Description</div>
              <div className="">
                <input
                  type="text"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="description-input"
                />
              </div>
            </div>
            <div className="label left-container">
              <button
                type="submit"
                className="create-btn"
                onClick={handleCreate}
              >
                Create
              </button>
            </div>
            <div className="signin-text label">
              Already have an account?{" "}
              <button className="signin-btn">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
