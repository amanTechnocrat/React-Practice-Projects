import React from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetNewPassword = () => {

  const redirect_main=useNavigate()
  const change_password=(e)=>
  {
    e.preventDefault()
    // alert("password change sucessfully")
    toast.success('Password Change Sucessfully', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    redirect_main("/")
  }
  return (
    <>
     <div className="main-wrapper">
  <div className="site-wrapper homepage" id="page">
    <section className="renew-password-section">
      <form>
        <h3> Reset your password </h3> 
        <div className="reenter-password">
          <div className="form-group">
            <label> Enter New Password </label>
            <input type="tel" className="form-control" placeholder="Enter New Password" />
          </div>
          <div className="form-group">
            <label> Re-enter Password </label>
            <input type="tel" className="form-control" placeholder="Enter your Password" />
          </div>
          <div className="form-group">
            <button className="btn button btn-primary" onClick={change_password}> Submit </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</div>


    </>
  )
}

export default ResetNewPassword