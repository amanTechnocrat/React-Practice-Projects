import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { changemode, incDec, incNum } from "./actions/index"
import { useState } from 'react';

function App() {
  const [toggleButton, setToggleButton] = useState(false);
  const mystate = useSelector((state) => state.logic);
  const mymode = useSelector((stated) => stated.change);
  const dispatch = useDispatch()
  return (<>
  <div className={mymode}>
    <h1>{mystate}</h1>
    <h1>{mymode}</h1>
    <button onClick={() => dispatch(incNum(1))}>++</button>
    <button onClick={() => dispatch(incDec(1))}>--</button>
    <button onClick={() => {setToggleButton(!toggleButton);dispatch(changemode(toggleButton))}}>mode</button>
    </div>
  </>
  );
}

export default App;
