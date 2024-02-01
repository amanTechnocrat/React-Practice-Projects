import React, { useState } from 'react';
import Greeting from './Components/Greeting';
import './App.css';
import { Ht } from './Components/Ht';
import Ss from './Components/Ss';
import { Usecallback } from './Components/Usecallback';
import axios from 'axios';


function App() {
  // const [num, setNum] = useState(0);
  const [pic, setpic] = useState();
  // useEffect(() => {
  //   alert("ok");
  // },[]);

  const getdata = async (e) => {
    e.preventDefault()
    if (pic != undefined) {
      const ext = pic.name.substring(pic.name.lastIndexOf('.'))
      console.log(ext);

      if (ext === ".jpeg" || ext === ".jpg" || ext === ".png" || ext === ".gif") {
        const data = new FormData();
        data.append('images', pic)
        const res = await axios.post(`http://localhost:8888/multiple`, data)
        console.log(res);
      } else {
        alert("please upload proper image")
      }
    } else {
      alert("please choose file")
    }

  }

  // const inc =( () =>{ return setNum(num + 1)})
  return (
    <>
      {/* <Greeting/> */}
      {/* <div className="c1">
        <button className='btn' onClick={inc} >click me {num}</button>
      </div> */}
      <Ht/>
      {/* <Ss/> */}
      <form onSubmit={(e) => { getdata(e) }}>
        <input type="file" onChange={(e) => { setpic(e.target.files[0]) }} multiple />
        <button type='submit' >Submit</button>
      </form>
    </>
  );
}

export default App;
