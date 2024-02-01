import React, { useState } from "react";
import ViaEmail from "./ViaEmail";
import ViaNo from "./ViaNo";
import GoogleLoginPage from "../Registration/GoogleLoginPage";
import FacebookLoginPage from "../Registration/FacebookLoginPage";

import { Link } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

const Login = (props) => {
  const [showmethod, setShowmethod] = useState("Email");
  const [formvalue, setformvalue] = useState({});
  const handlechange = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newdata = { formvalue };
    console.log("New Data", newdata);

  };
  const fun = (res) => {
    console.log(res);
  };

  return (
    <>


      <div className="main-wrapper">
        <div className="site-wrapper homepage" id="page">
          <section className="login-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="user-login">
                    <div className="back-icon">
                      {/* <i class="fa-solid fa-arrow-left"></i> */}
                    </div>
                    <div className="direct-login">
                      <h3>

                        login <img src="assets/images/hand.png" />
                      </h3>
                      <span>
                        <Link to="/signup" style={{ color: "blue" }}>

                          Don't have an account? Sign Up
                        </Link>
                      </span>
                      <div className="btn-login">
                        {/* <button className="btn button btn-outline"> <img src="assets/images/google.png" /> Sign in with Google </button> */}
                        <GoogleLoginPage setUser={() => props.setUser()} />
                        {/* <button className="btn button btn-outline">
                          
                          <img src="assets/images/facebook.png" /> Sign in with
                          Facebook
                          

                        </button> */}

                        <FacebookLoginPage />

                      </div>
                    </div>
                    <div className="signin-form">
                      <span className="line"> or Sign in with {showmethod==="Email"? "Email" : "Mobile"} </span>
                      <form onSubmit={handlesubmit}>
                        <div className="select-option">
                          <div className="form-check">
                            <input
                              className="form-check-input show-mail"
                              type="radio"
                              value="Email"
                              checked={showmethod === "Email"}
                              onChange={(e) => {
                                setShowmethod(e.target.value);
                              }}
                            />
                            <label> Email </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input show-number"
                              type="radio"
                              value="phoneNo"
                              checked={showmethod === "phoneNo"}
                              onChange={(e) => {
                                setShowmethod(e.target.value);
                              }}
                            />
                            <label> Mobile Number </label>
                          </div>
                        </div>
                        {showmethod === "Email" ? (
                          <ViaEmail handlechange={handlechange} />
                        ) : (
                          <ViaNo handlechange={handlechange} />
                        )}
                      </form>
                      <div className="rights">
                        <span>
                          
                          @SMS Scheduler All rights reserved{" "}
                          {new Date().getFullYear()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-design">
                    <div className="login-info">
                      <p> Very good works are waiting for you </p>
                      <a href="#"> Login now </a>
                      <img
                        src="assets/images/woman.png"
                        className="woman-img"
                      />
                    </div>
                    <img src="assets/images/pattern.png" className="pattern" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
