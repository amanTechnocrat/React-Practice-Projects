import React,{useState} from 'react';

export const Usecallback = () => {

    const [num, setnum] = useState(0);
    const [sum, setsum] = useState(0);
    const inc = ()=>{
        
        setnum(num + 1)
    }
    const sumchang =()=>{
        setsum(sum + 5)
    }
    const check = ()=>{
        console.log("itsme")
         return num > 5 ? true : false;
    }
    return (<>
        <h1>{num}</h1>
        <h1>{sum}</h1>
        <button onClick={inc}>clickme</button>
        <span>{check ? "ok" : "not ok"}</span><br />
        <button onClick={sumchang}>c22</button>
    </>);
};
