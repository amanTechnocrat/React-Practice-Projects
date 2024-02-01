import React, { useState, useEffect } from 'react'
import { collection, getDocs, doc,deleteDoc,updateDoc } from 'firebase/firestore'
import Readonly from './Readonly'
import Editable from './Editable'
import { db } from '../Services/Fireb-config'
import { CleaningServices } from '@mui/icons-material'


const Showinfo = () => {
  const [data, setdata] = useState([]);
  const [flag, setFlag] = useState(true);
  const [edit, setedit] = useState(null);
  const [temval, settemval] = useState();
  const useref = collection(db, "userinfo")

  const showdata = async () => {
    const dat = await getDocs(useref)
    console.log(dat);
    await setdata(dat.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log("yr", data);
  }

  const delelist = async(id)=>{
    setFlag(!flag)
    // console.log("its me");
    const kye = doc(db,"userinfo",id)
    await deleteDoc(kye)
  }
  const back = () =>{
    setedit("")
  }
  const uplist=  async(data,id)=>{
    // setFlag(!flag)
    // const kye = doc(db,"userinfo",id)
    // let v = prompt("Update list",data);
    // let updlist = {task: v}
    // await updateDoc(kye,updlist)
    setedit(id)
    settemval(data)
  }

  useEffect(() => { showdata() }, [flag,edit]);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Department</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {data.map((val) => {
          
          return (<div>
            {edit === val.id ? <Editable back={back} tempvalue={temval} edit={edit}/> : <Readonly val={val} uplist={uplist} delelist={delelist} />}
            </div>
            )})}
      </table>
    </>
  )
}

export default Showinfo