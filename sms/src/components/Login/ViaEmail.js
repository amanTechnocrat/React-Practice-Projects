import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const ViaEmail = ({ handlechange, handlesubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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
        if (!values.password) {
          errors.password = "This field is required";
        } else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            values.password
          )
        ) {
          errors.password =
            "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters ";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        //   props.setUser(true);
        }, 400);
        // Navigate("/");
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
          <div className="login-email">
            <div className="form-group">
              <label> Email </label>
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
                <div style={{ color: "red" }} className="error_msg">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="form-group">
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
                <div style={{ color: "red" }} className="error_msg">
                  {errors.password}
                </div>
              )}
              <Link to="/forgotpassword">
                {" "}
                <span> Forgot your password? </span>
              </Link>
            </div>
            <div className="form-group">
              <button className="btn button btn-primary"> login </button>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default ViaEmail;
