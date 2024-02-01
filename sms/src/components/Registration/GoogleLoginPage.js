import React, { useState } from "react";


import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
// import swal from 'sweetalert';
const GoogleLoginPage = (props) => {
  console.log(props);
  const on_dasboardh_page = useNavigate()
  const client_id =
    "233345635594-km0tlqqrv2difnjgovf2jn11sgg7117c.apps.googleusercontent.com";
  const [showLoginButton, setLoginButton] = useState(true);
  const [showLogoutButton, setLogoutButton] = useState(false);
  const loginHandler = (res) => {
    // swal("Sucessfull", "", "success");
    console.log("res", res.profileObj);
    console.log("this is my")
    setLoginButton(false);
    setLogoutButton(true);
    // const store=localStorage.getItem(res.profileObj)
    // console.log(store);
    if (res !== null) {
      console.log(res);
      props.setUser(true);
      // console.log(permission)
      on_dasboardh_page("/dasboard")
    }

  };
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  const logoutHandler = (res) => {
    
    setLoginButton(true);
    setLogoutButton(false);

  };
  return (
    <>
      {showLoginButton && (
        <>
          {/* <GoogleLogin
              className="google-item"            
              clientId={client_id}
              onSuccess={loginHandler}
              onFailure={failureHandler}
              cookiePolicy={"single_host_origin"}
            /> */}
          <GoogleLogin
            clientId={client_id}
            render={(renderProps) => (
              <button
                className="btn button btn-outline"
                onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
              >
                <img src="assets/images/google.png" /> Sign in with Google
              </button>
            )}
            onSuccess={loginHandler}
            onFailure={failureHandler}
            cookiePolicy={"single_host_origin"}
          />
        </>
      )}
      {showLogoutButton && (
        <GoogleLogout
          clientId={client_id}
          render={(renderProps) => (
            <button
              className="btn button btn-outline"
              onClick={renderProps.onClick}
            // disabled={renderProps.disabled}
            >
              <img src="assets/images/google.png" /> logout
            </button>
          )}
          onLogoutSuccess={logoutHandler}
        ></GoogleLogout>
      )}
    </>
  );
};
export default GoogleLoginPage;
