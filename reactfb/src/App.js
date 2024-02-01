import './App.css';
import { useState,useEffect} from 'react';
import { db } from "./firebase-config";
import {addDoc, collection,doc,getDocs,updateDoc,deleteDoc} from 'firebase/firestore'



function App() {
  const [list, setlist] = useState("");
  const [arr, setarr] = useState([])
  const fbref = collection(db,"todolist")
  const [flag, setFlag] = useState(false)

  

  const addlist= async()=>{
    if(list.trim().length > 0){
      setFlag(!flag)
    await addDoc(fbref,{task: list})
    setlist("") }
    else{
      alert("This field can't be empty")
    }
  }
  
  const uplist=  async(data,id)=>{
    setFlag(!flag)
    const kye = doc(db,"todolist",id)
    let v = prompt("Update list",data);
    let updlist = {task: v}
    await updateDoc(kye,updlist)
  }
  const delelist = async(id)=>{
    setFlag(!flag)
    console.log("its me");
    const kye = doc(db,"todolist",id)
    await deleteDoc(kye)
  }

  const showdata = async()=>{
    const data = await getDocs(fbref)
    console.log(data);
     await setarr(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    console.log("yr",arr);
  }

  useEffect(() => {
    showdata();
  }, [flag]);

  return (
    <>
      <h1>hello</h1>
      <input type="text" value={list} onChange={(e)=>{setlist(e.target.value)}}/>
      <button onClick={addlist}>Add</button>
      {arr.length > 0 ? arr.map((val)=>{
        return(<><h1>{val.task}</h1>
        <button onClick={()=>uplist(val.task,val.id)}>Update</button>
        <button onClick={()=>delelist(val.id)}>delete</button>
        </>)
      }):null}
    </>
  );
}

export default App;
