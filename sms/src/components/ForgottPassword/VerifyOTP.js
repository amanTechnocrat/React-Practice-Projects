import React from "react";
import { useNavigate } from "react-router-dom";


const VerifyOTP = () => {
    
    const verify_The_OTP=useNavigate()

    const verify_OTP=()=>
    {
        verify_The_OTP("/newpassword")
    }

  return (
    <>
      
      <div className="main-wrapper">
  <div className="site-wrapper homepage" id="page">
    <section className="verification-section">
      <form>
        <h3> Verify OTP </h3> 
        <div className="Verify-OTP">
          <div className="form-group">
            <label> Enter OTP </label>
            <input type="tel" className="form-control" placeholder="Enter OTP" />
          </div>
          <div className="form-group">
            <button className="btn button btn-primary" onClick={verify_OTP}> Verify </button>
          </div>
        </div>                    
      </form>
    </section>
  </div>
</div>

    </>
  );
};

export default VerifyOTP;
