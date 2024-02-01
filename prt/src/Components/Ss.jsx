import React,{useReducer} from 'react';

const Ss = () => {


    const intialst = {
        number: 0,
        pay: 10
    };

    const redfun = (state, action) => {
        switch (action.type) {
            case 'add':
                // return state + 1;
                return { ...state, number: state.number + action.payload }
            case 'sub':
                // return state - 1;
                return { ...state, number: state.number - 1 }
            case 'reset':
                return { ...state, number: intialst.number }
            case 'gp':
                return { ...state, pay: state.pay + action.payload }
        }

    }
    
    const [state, dispatch] = useReducer(redfun, intialst)
    return (<>
        <h1>{state.number}</h1>
        <button onClick={() => dispatch({ type: 'add', payload: 5 })}>add</button>
        <button onClick={() => dispatch({ type: 'sub' })}>sub</button>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        <br></br>
        <h1>{state.pay}</h1>
        <button onClick={() => dispatch({ type: 'gp', payload: 10 })}>pay</button>

    </>);
};

export default Ss;
