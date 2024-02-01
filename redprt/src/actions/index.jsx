export const incNum =(dv)=>{
    return{
        type:"inc",
        payload : dv
    }
}
export const incDec =(dv)=>{
    return {
        type:"dec",
        payload:dv
    }
}
export const changemode =(val)=>{
    return{
        type:"changemode",
        payload:val
    }
}
