import React, { useState } from "react";
import sallySvg1 from "../assets/SalySvg1.svg";
import sallySvg2 from "../assets/SalySvg2.svg";
import linkSvg from "../assets/LinkSvg.svg";
import "./Signup.css";

const Signup = () => {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="signup">
      <div className="dummy-nav"></div>
      <div className="flex-container">
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

        <div className="flex-2">
          <div className="signup-form">
            <div className="first-name left-container">
              <div className="label">First Name</div>
              <div className="input">
                <input type="text" name="first-name" className="name-input" />
              </div>
            </div>
            <div className="last-name ">
              <div className="label">Last Name</div>
              <div className="input">
                <input type="text" name="first-name" className="name-input" />
              </div>
            </div>

            <div className="first-name left-container">
              <div className="label">Select Blockchain Account</div>
              <div className="input">
                <input
                  type="text"
                  name="first-name"
                  className="account-input"
                />
              </div>
            </div>
            <div className=" label">
              <button type="submit" className="connect-btn ">
                <img src={linkSvg} alt="" />
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
                onChange={handleChange}
              >
                <option value="" disabled selected hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="left-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;