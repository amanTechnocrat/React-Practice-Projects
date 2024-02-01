import React from "react";
// import {Link} from "react-router-dom"
import { Formik } from "formik";
const ViaNo = ({ handlechange }) => {
  return (
    <Formik
      initialValues={{
        contactNo: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        
        if (!values.contactNo) {
          errors.contactNo = "This field is required";
        } else if (
          !/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(values.contactNo)
        ) {
          errors.contactNo = "Please Enter 10 Digit Number Only ";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("values", values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // props.setUser(true);
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
          <div className="login-phone">
            <div className="form-group">
              <label> Mobile Number </label>
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
                <div style={{ color: "red" }} className="error_msg">
                  {errors.contactNo}
                </div>
              )}
              {/* <Link to="/forgotpassword" > <span>  Forgot your password </span></Link> */}
              <br />
            </div>
            <div className="form-group">
              <button className="btn button btn-primary"> Login </button>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default ViaNo;
