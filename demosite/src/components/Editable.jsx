import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { collection, getDocs, doc,deleteDoc,updateDoc } from 'firebase/firestore'
import { db } from '../Services/Fireb-config'

const Editable = ({ back, tempvalue , edit}) => {
    const [data, setdata] = useState(tempvalue);

    const stdata = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata({ ...data, [name]: value })
    }

    const update = async(edit) => {
        if(data.firstName.trim().length && data.lastName.trim().length && data.email.trim().length && data.password.trim().length && data.department.trim().length > 0){
        const kye = doc(db,"userinfo",edit)
        // let v = prompt("Update list",data);
         let updlist = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            department: data.department
        }
         await updateDoc(kye,updlist)
         back()
    }
    else{
        alert("Fields cant be empty")
    }
    }

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <input type="text" value={data.firstName} onChange={(e) => { stdata(e) }} placeholder='Enter' required="required" name='FirstName' />
                    </td>
                    <td>
                        <input type="text" value={data.lastName} onChange={(e) => { stdata(e) }} placeholder='Enter' required="required" name='lastName' />
                    </td>
                    <td>
                        <input type="text" value={data.email} onChange={(e) => { stdata(e) }} placeholder='Enter' required="required" name='email' />
                    </td>
                    <td>
                        <input type="text" value={data.password} onChange={(e) => { stdata(e) }} placeholder='Enter' required="required" name='password' />
                    </td>
                    <td>
                        <input type="text" value={data.department} onChange={(e) => { stdata(e) }} placeholder='Enter' required="required" name='department' />
                    </td>
                    <Button variant="contained" color='primary' onClick={()=>{update(edit)}}>Save</Button>
                </tr>
            </tbody>
        </>
    )
}

export default Editable