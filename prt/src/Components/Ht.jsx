import React, { useMemo, useState, useReducer, useCallback, useEffect } from 'react';
import axios from 'axios';


export const Ht = () => {
    const [count, setcount] = useState(0);
    const [mutp, setmutp] = useState(5);

    //axios
    const [xc, setxc] = useState(null);
    const [name, setname] = useState(null);
    const [mv, setmv] = useState(null)
    const [hg, sethg] = useState(null)
    const ply = () =>{
        const ask = prompt("Enter")
        setxc(ask)
    }
    const play = () => {
        setmutp(mutp * 10)
    }

    const getdata  = async()=>{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${xc}`)
        console.log(res);
        setname(res.data.name)
        setmv(res.data.moves.length)
        sethg(res.data.height)
    }

    useEffect(()=>{
        getdata()
    },[xc]);

    // const check5 = ()=> {
    //     console.log("its me");
    //     return count > 5 ? true: false;
    // }
    const check5 = useMemo(() => {
        console.log("its me");
        return count > 5 ? true : false;
    }, [count])


    const intialst = {
        number:0,
        pay:10
    };
    const redfun =(state,action)=>{
        switch(action.type){
            case 'add':
                // return state + 1;
                return {...state ,number: state.number + action.dv}
            case 'sub':
                // return state - 1;
                return {...state ,number: state.number - 1}
            case 'reset':
                return {...state ,number:intialst.number}
            case 'gp':
                return {...state ,pay: state.pay + action.dv}
        }

    }
    const [state, dispatch] = useReducer(redfun,intialst)
   

    return (
        <>
            <div>
                <h1>{count}</h1>
                <h1>{mutp}</h1>
                <button onClick={() => { setcount(count + 1) }}>click</button>
                <span>{check5 ? "ok" : "not ok"}</span>
                <button onClick={play}>click2</button>
                <br />
                <h1>{state.number}</h1>
                <button onClick={()=> dispatch({type:'add',dv:5})}>add</button>
                <button onClick={()=> dispatch({type:'sub'})}>sub</button>
                <button onClick={()=> dispatch({type:'reset'})}>reset</button>
                <br></br>
                <h1>{state.pay}</h1>
                <button onClick={()=> dispatch({type:'gp',dv:10})}>pay</button>
            </div>
            <br />







            <div style={{textAlign:'center'}}>
            <h1>u hv selected {xc}</h1>
            <h1>My name is  {name}</h1>
            <h1>i have  {mv} moves</h1>
            <h1>my height is {hg} ft</h1>
            <button onClick={ply}>Enter your Number</button>


                {/* <select onChange={(ch)=>{return setxc( ch.target.value )}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br></br> */}
                {/* <button onClick={getdata}>selected</button> */}
            </div>
        </>
    )
};
