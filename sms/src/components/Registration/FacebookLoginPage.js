

import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// const book = require("./assets/images/facebook.png")
//import ReactDOM from "react-dom";
const responseFacebook = (response) => {
  console.log(response);
  
};
const FacebookLoginPage = () => {
  
  const [showLoginButton, setLoginButton] = useState(true);
  const [showLogoutButton, setLogoutButton] = useState(false);
  const loginHandler = (res) => {
    console.log("res", res.profileObj);
    setLoginButton(false);
    setLogoutButton(true);
  };
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  const logoutHandler = (res) => {
    alert("logout sucessfully");
    setLoginButton(true);
    setLogoutButton(false);
  };
  return (
    <>
      {showLoginButton && (
        <FacebookLogin
          appId="240813111599696"
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              className="btn button btn-outline"
              onClick={renderProps.onClick}
            >  
                  <img src="assets/images/facebook.png" />  Sign in with Facebook
            </button>
            
            )}
            />
            )}
           
    </>
  );
};
export default FacebookLoginPage;
