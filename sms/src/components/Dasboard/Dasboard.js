import React, { useState, useRef } from "react";

import { Formik } from "formik";
import SideNav from "../SideNav/SideNav";
// import Profile from "../Showpro/Profile";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
// import { Popover, Calendar } from "antd";
import { Pane, Popover, Text, Position, Button } from 'evergreen-ui'
import "antd/dist/antd.css";
import DatePicker from "sassy-datepicker";

function Dashboard() {
  const redirect_camp = useNavigate();
  const redirect_contact = useNavigate();
  const [flaguser, setflaguser] = useState(false);
  const [EDIT_PROFIL, SetEDIT_PROFILE] = useState(false);

  const to_campaigns = () => {
    redirect_camp("/campaigns");
  };
  const to_contactlist = () => {
    redirect_contact("/contact");
  };

  const inputFile = useRef(null);
  const show_choose_file = () => {
    inputFile.current.click();
  };

  const content = (
    <div
      style={{
        // width: "220px",
        border: " 1px solid #f0f0f0",
        borderRadius: "5px",
        display: "block",
      }}
    >
      {/* <Calendar fullscreen={false} /> */}
      <DatePicker />
    </div>
  );

  const EDIT_PROFILE_PAGE = () => {
    SetEDIT_PROFILE(true);
  };
  const BACK_TO_DASBOARD = () => {
    SetEDIT_PROFILE(false);
  };
  return (
    <>
      <SideNav />

      {!EDIT_PROFIL && (
        <div className="main-wrapper fixed-nav">
          <header className="site-header" id="header">
            <div className="hamburger-menu">
              <i className="fas fa-bars hamburger-menu" />
            </div>

            {/* <div className="accountent-info"> */}
            <div
              className={
                flaguser
                  ? " accountent-info show-full-profile accountent-profile"
                  : " accountent-info accountent-profile"
              }
            >
              <div className="accountent-img">
                <img
                  src="assets/images/accountent.jpg"
                  alt="accountent profile"
                />
              </div>

              <div className="accountent-detail">
                <h5
                  onClick={() => {
                    setflaguser(!flaguser);
                  }}
                >
                  Franchise Richards
                  {flaguser ? (
                    <i className="fa-solid fa-angle-down" />
                  ) : (
                    <i className="fa-solid fa-angle-down" />
                  )}
                </h5>
                <span> Marketing Head </span>
              </div>
              {/* accout profile show */}
              <div className="accountent-profile">
                <div className="elipse-img">
                  {/* <img src="assets/images/Ellipse.png" alt="half-elipse" /> */}
                </div>
                <div className="profile-detail">
                  <div className="profile-img">
                    <img
                      src="assets/images/accountent.jpg"
                      alt="fulldetail-accountent-img"
                    />
                  </div>
                  <div className="profile-info">
                    <div className="profile-edit">
                      <i
                        onClick={EDIT_PROFILE_PAGE}
                        className="fas fa-pencil"
                      />
                      <span> Edit Profile </span>
                    </div>
                    <div className="profile-account-info">
                      <h6> Franchise Richards </h6>
                      <span> Marketing Head </span>
                    </div>
                    <div className="campaign-short-info">
                      <ul>
                        <li>
                          <h6> Campaigns Created: </h6>
                          <span> 200 </span>
                        </li>
                        <li>
                          <h6> Successful: </h6>
                          <span> 178 </span>
                        </li>
                        <li>
                          <h6> Pending: </h6>
                          <span> 22 </span>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-sign-out">
                      {/* <a href="#"> Sign Out </a> */}
                      <NavLink to="/">Sign Out</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* code ending */}
            </div>
            <div className="other-setting">
              <a>
                    <Popover content={content}  position={Position.BOTTOM_RIGHT} trigger="click">
                      <img src="assets/images/calender.png" />
                    </Popover>        
              </a>
            </div>
          </header>
          {/* starting */}
          <div className="site-wrapper homepage" id="page">
            <section className="dashboard-section">
              <div className="campaign-carousal">
                <div className="carousal-header">
                  <h5> Scheduled Messages </h5>
                </div>
                <div className="carousal-items">
                  <div className="campaign-item">
                    <div className="item-header">
                      <h6> Brand awareness campaign </h6>
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </div>
                    <div className="space">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="show-status">
                            <h6> Status: </h6>
                            <span> Pending </span>
                          </div>
                          <div className="show-deadline">
                            <h6> Deadline: </h6>
                            <span> Not yet set </span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="show-priority-level">
                            <h6> Priority Level </h6>
                            <span>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "75%" }}
                                />
                              </div>
                            </span>
                          </div>
                          <div className="user">
                            <ul className="group-imgshow">
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="campaign-item">
                    <div className="item-header progres">
                      <h6> Rebranding campaign </h6>
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </div>
                    <div className="space">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="show-status">
                            <h6> Status: </h6>
                            <span> In progress </span>
                          </div>
                          <div className="show-deadline">
                            <h6> Deadline: </h6>
                            <span> 25 Sept. 2022 </span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="show-priority-level">
                            <h6> Priority Level </h6>
                            <span>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "75%" }}
                                />
                              </div>
                            </span>
                          </div>
                          <div className="user">
                            <ul className="group-imgshow">
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="campaign-item">
                    <div className="item-header completed">
                      <h6> Search engine marketing </h6>
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </div>
                    <div className="space">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="show-status">
                            <h6> Status: </h6>
                            <span> Completed </span>
                          </div>
                          <div className="show-deadline">
                            <h6> Deadline: </h6>
                            <span> 25 Sept. 2022 </span>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="show-priority-level">
                            <h6> Priority Level </h6>
                            <span>
                              <div className="progress">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "75%" }}
                                />
                              </div>
                            </span>
                          </div>
                          <div className="user">
                            <ul className="group-imgshow">
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                              <li>
                                <img src="assets/images/user.png" alt="user" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* endingpoint */}
            <section className="campaigns-contacts">
              <div className="row">
                <div className="col-sm-6">
                  <div className="add-campaigns">
                    <div className="campaigns-header">
                      <h5> campaigns </h5>
                      <a>
                        <i
                          onClick={to_campaigns}
                          className="fa-solid fa-plus"
                        />
                      </a>
                    </div>
                    <div className="campaigns-info">
                      <p> Brand awareness campaign </p>
                      <p> Rebranding campaign </p>
                      <p> Brand awareness campaign </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="add-contacts">
                    <div className="contacts-header">
                      <h5> Contacts </h5>
                      <i
                        onClick={to_contactlist}
                        className="fa-solid fa-plus"
                      />
                    </div>
                    <div className="contacts-info">
                      <div class="contacts-remove">
                        <p> Preet Patel </p>
                        <a href="#"> Delete </a>
                      </div>
                      <div class="contacts-remove">
                        <p> Mayank Garasiya </p>
                        <a href="#"> Delete </a>
                      </div>
                      <div class="contacts-remove">
                        <p> Dilip Chaudhary </p>
                        <a href="#"> Delete </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {EDIT_PROFIL === true ? (
        <>
          <div className="main-wrapper">
            <div className="site-wrapper " id="page">
              <section className="edit-profile-section">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    fname: "",
                    lname: "",
                    contactNo: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("values", values);
                    // setTimeout(() => {
                    //   alert(JSON.stringify(values, null, 2));
                    //   setSubmitting(false);
                    //        }, 400);
                    // Navigate("/dasboard");
                  }}
                  validate={(values) => {
                    //console.log("valid values",values);
                    const errors = {};
                    if (!values.email) {
                      errors.email = "This field is required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email =
                        "Please enter a valid email(Ex.test@domain.com)";
                    }

                    if (!values.fname) {
                      errors.fname = "This field is required";
                    } else if (!/^[a-zA-Z]+$/.test(values.fname)) {
                      errors.fname = "Invalid first name ";
                    }
                    if (!values.lname) {
                      errors.lname = "This field is required";
                    } else if (!/^[a-zA-Z]+$/.test(values.lname)) {
                      errors.lname = "Invalid last name ";
                    }
                    if (!values.password) {
                      errors.password = "This field is required";
                    } else if (
                      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                        values.password
                      )
                    ) {
                      errors.password =
                        " Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters";
                    } else {
                      errors.password = " ";
                    }

                    if (!values.contactNo) {
                      errors.contactNo = "This field is required";
                    } else if (
                      !/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(
                        values.contactNo
                      )
                    ) {
                      errors.contactNo = "Enter mobile number ";
                    }

                    return errors;
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="back-icon">
                        <i
                          onClick={BACK_TO_DASBOARD}
                          class="fa-solid fa-arrow-left"
                        ></i>
                      </div>
                      <h6>Profile Picture</h6>
                      <div class="upload-profile" onClick={show_choose_file}>
                        <div class="profile-img">
                          <img
                            src="assets/images/accountent.jpg"
                            alt="profile image"
                          />
                          <i class="fas fa-pencil"></i>
                        </div>
                        <label> Upload New image </label>
                        <input type="file" ref={inputFile} />
                      </div>
                      <div className="input-group">
                        <div className="form-group">
                          <label> First Name </label>
                          <input
                            type="name"
                            name="fname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fname}
                            className="form-control"
                            placeholder="First Name"
                          />
                          {errors.fname && touched.fname && (
                            <div style={{ color: "red" }}>{errors.fname}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <label>Last Name </label>
                          <input
                            type="name"
                            name="lname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lname}
                            className="form-control"
                            placeholder="Last Name"
                          />

                          {errors.lname && touched.lname && (
                            <div style={{ color: "red" }}>{errors.lname}</div>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email ID </label>
                        <input
                          autoComplete="off"
                          type="email"
                          name="email"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Enter xyz@mail.com"
                        />
                        {errors.email && touched.email && (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Contact</label>
                        <input
                          type="number"
                          name="contactNo"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contactNo}
                          className="form-control"
                          placeholder="Enter Contact No"
                        />
                        {errors.contactNo && touched.contactNo && (
                          <div style={{ color: "red" }}>{errors.contactNo}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          value={values.password}
                          placeholder="Enter password"
                        />
                        {errors.password && touched.password && (
                          <div style={{ color: "red" }}>{errors.password}</div>
                        )}
                      </div>
                      <div className="form-group edit-save-change">
                        <button
                          type="submit"
                          className="btn button btn-primary"
                          disabled={isSubmitting}
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </section>
            </div>
          </div>
        </>
      ) : (
        "testt"
      )}
    </>
  );
}
export default Dashboard;
