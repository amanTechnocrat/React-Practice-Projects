import React, { useRef, useState, useEffect } from 'react';


const Todolist = () => {
    const [text, setltext] = useState("");
    const [addt, setaddt] = useState([]);
    const [theme, settheme] = useState("light");
    const [thest, setthest] = useState("Enable Dark Mode");
    const title = useRef(null);
    const letarea = useRef(null);


    useEffect(() => {
        alert("Welcome to Todolist App")
    }, []);

    const change = () => {
        // theme === "light" ?
        // settheme("dark")
        //     :
        // settheme("light")
        if (theme === "light") {
            settheme("dark")
            document.body.style.backgroundColor = "rgb(3, 7, 71)";
            // document.getElementsByClassName("title")[0].style.color="white"
            title.current.style.color = "white"
            setthest("Disable Dark Mode")
            letarea.current.style.backgroundColor="gold"
        }
        else {
            settheme("light")
            document.body.style.backgroundColor = "rgb(156, 155, 245)";
            // document.getElementsByClassName("title")[0].style.color="black"
            title.current.style.color = "black"
            setthest("Enable Dark Mode")
            letarea.current.style.backgroundColor="white" 
        }
    }




    const addlist = () => {
        setaddt([...addt, text])
        setltext("");
    }

    const ltext = (obj) => {
        setltext(obj.target.value);
    }

    const clear = (obj) => {
        setltext(obj.target.value = "");
        return setaddt([])
    }

    const deleteItem = (index) => {
        addt.splice(index, 1);
        setaddt([...addt])
    }
    const update = (index) => {
        let inv = addt[index]
        let v = prompt("Update list", inv);
        addt.splice(index, 1, v);
        setaddt([...addt])
    }

    return (<>
        <div className="title">
            <h1 ref={title} style={{ textAlign: "center", fontWeight: "900" }}>Todo List</h1>
        </div>
        <div className='sup'>
            <div className={theme} >
                <br />
                <button className='btc' onClick={addlist}>Add</button>
                <br />
                <textarea ref={letarea} className='input' type="text" placeholder='Add list' value={text} onChange={ltext} />
                <br />
                <button className='btc' onClick={clear}>clear</button>
                <br />
                <button onClick={change} className='dmbtn'>{thest}</button>

                <div className="dr">
                    {addt.map((val, index) => (

                        val.length > 0 ?
                            (
                                <>
                                    <div className="row">
                                        <h4>{val.toUpperCase()}</h4>
                                        <button className='btn' onClick={() => deleteItem(index)}>Delete</button>
                                        <button className='btn' onClick={() => update(index)}>update</button>
                                        <br />
                                    </div>
                                </>
                            )
                            : null

                    ))}
                </div>

            </div>
        </div>
    </>
    );
}

export default Todolist;

