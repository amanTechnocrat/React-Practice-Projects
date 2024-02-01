import React from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Forgetpass = () => {
    const param = useParams()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      await axios.post(`http://localhost:8888/cp`, data,
            {
                headers: {
                    authorization: `Bearer ${param.token}`
                }
            })
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('password')} placeholder="password" />
                <br /> <br />
                {/* <input {...register('otp')} placeholder="otp" /> */}
                <input type="submit" />
            </form>
        </>
    )
}

export default Forgetpass;