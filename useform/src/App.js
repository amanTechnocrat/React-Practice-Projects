import React from "react";
import {Route,Routes} from "react-router-dom";
// import { useForm } from 'react-hook-form';
// import axios from "axios";
import Forgetpass from "./components/Forgetpass";

function App() {
 
  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('password')} placeholder="password" />
        <br /> <br />
        <input {...register('otp')} placeholder="otp" /> */}
        {/* <input {...register('info.lastName', { required: true })} placeholder="lastname" /><br />
        {errors.info?.lastName && <p>Last name is required.</p>}<br />
        <input {...register('info.age', { pattern: /\d+/, maxLength: 1 })} placeholder="age" /><br />
        {errors.info?.age && <p>Please enter number for age.</p>}<br />
        <input type="checkbox" {...register('info.checked', { required: true })} onChange={(v)=>{console.log(v.target.checked)}}  />
        <label htmlFor="checkbox">I Agree</label><br /> */}
        {/* <input type="submit" /> */}

      {/* </form> */}
      <Routes>
      <Route exact path='/f/:token' element={<Forgetpass />} />
      </Routes>
      {/* <Forgetpass /> */}
    </>
  );
}

export default App;
