import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {
  const redirect_for_otpverify = useNavigate();

  const [otp_btn_flag, setOtp_btn_flag] = useState(true);
  const [showmethog, setShomethod] = useState("Email");
  const choose = () => {
    setOtp_btn_flag(true);
    setShomethod("Email");
  };
  const choose2 = () => {
    setOtp_btn_flag(false);
    setShomethod("Phone");
  };
  const to_verify_otp = () => {
    redirect_for_otpverify("/verifyotp");
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="site-wrapper homepage" id="page">
          <section className="reset-password-section">
            <form>
              <h3> Reset your password </h3>
              <div className="select-option">
                <div className="form-check">
                  <input
                    className="form-check-input show-mail"
                    name="getlogin"
                    type="radio"
                    value="Email"
                    checked={showmethog === "Email"}
                    onClick={choose}
                  />
                  <label> Email </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input show-number"
                    name="getlogin"
                    type="radio"
                    value="Mobile Number"
                    checked={showmethog === "Phone"}
                    onClick={choose2}
                  />
                  <label> Mobile Number </label>
                </div>
              </div>
              {otp_btn_flag && (
                <div className="login-email">
                  <div className="form-group">
                    <label> Email </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      onClick={to_verify_otp}
                      className="btn button btn-primary"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              )}

              {!otp_btn_flag && (
                <div className="login-phone">
                  <div className="form-group">
                    <label> Mobile Number </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Your Number"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      onClick={to_verify_otp}
                      className="btn button btn-primary"
                    >
                      Send OTP
                    </button>
                  </div>
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
