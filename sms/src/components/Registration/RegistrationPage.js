import { Formik } from "formik";

import GoogleLoginPage from "./GoogleLoginPage";
import FacebookLoginPage from "./FacebookLoginPage";
import { Link, useNavigate } from 'react-router-dom'

const Demo = (props) => {
  const Navigate = useNavigate();
  console.log(props.setUser());

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        fname: "",
        lname: "",
        contactNo: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Please enter a valid email(Ex.test@domain.com)";
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
          errors.password = "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters ";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "This field is required";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            values.confirmPassword
          )
        ) {
          errors.confirmPassword = "Enter Valid Password";
        }
        if (!values.contactNo) {
          errors.contactNo = "This field is required";
        } else if (
          !/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(values.contactNo)
        ) {
          errors.contactNo = "Please Enter 10 Digit Number Only ";
        }
        if (values.password !== values.confirmPassword) {
          let fromvalid = "both password has same";
          errors.confirmPassword = "Password Doesn't Match"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          props.setUser(true);
        }, 400);
        Navigate("/");
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
        <>
          <div>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title> SMS Scheduler Register Page </title>
            <div className="main-wrapper">
              <div className="site-wrapper homepage" id="page">
                <section className="register-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="user-register">
                          <div className="back-icon">
                            {/* <i className="fa-solid fa-arrow-left" /> */}
                          </div>
                          <div className="direct-login">
                            <h3>
                              Register <img src="assets/images/hand.png" alt="Hand" />
                            </h3>
                            <Link to="/">Already have an account? Sign in</Link>
                            <div className="btn-sign-up">
                              <GoogleLoginPage setUser={() => props.setUser()} />
                              <FacebookLoginPage />
                            </div>
                          </div>
                          <div className="register-form">
                            <span className="line"> or </span>
                            <form onSubmit={handleSubmit}>
                              <div className="form-row fill-data">
                                <div className="form-group col-lg-6 col-md-6">
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
                                    <div style={{ color: "red" }} className="error_msg">{errors.fname}</div>
                                  )}
                                </div>
                                <div className="form-group col-lg-6 col-md-6">
                                  <label> Last Name </label>
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
                                    <div style={{ color: "red" }} className="error_msg">{errors.lname}</div>
                                  )}
                                </div>
                                <div className="form-group col-lg-6 col-md-6">
                                  <label> Contact Number </label>
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
                                    <div style={{ color: "red" }} className="error_msg" >{errors.contactNo}</div>
                                  )}
                                </div>

                                <div className="form-group col-lg-6 col-md-6">
                                  <label> Email Address </label>
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
                                    <div style={{ color: "red" }} className="error_msg" >{errors.email}</div>
                                  )}
                                </div>
                                <div className="form-group col-lg-6 col-md-6">
                                  <label> Password </label>
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
                                    <div style={{ color: "red" }} className="error_msg" >{errors.password}</div>
                                  )}
                                </div>
                                <div className="form-group col-lg-6 col-md-6">
                                  <label> Confirm Password </label>
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control"
                                    value={values.confirmPassword}
                                    placeholder="Enter confirm password"
                                  />
                                  {errors.confirmPassword &&
                                    touched.confirmPassword && (
                                      <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                  <button
                                    className="btn button btn-primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                  // onClick={props.setUser(true)}
                                  >
                                    Register
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div className="rights">
                              <span>
                                @SMS Scheduler All rights reserved 2022
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-design">
                          <div className="register-info">
                            <div className="register-img">
                              <img src="assets/images/register-logo.png" alt="register logo" />
                            </div>
                            <h1> SMS Scheduler </h1>
                          </div>
                          <img src="assets/images/pattern.png" className="pattern" alt="pattern" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};
export default Demo;
