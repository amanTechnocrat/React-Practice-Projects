// const initialState = {
//     num: 0
// };
const logic = (state = 0, action) => {
    switch (action.type) {
        case "inc":
            return state + action.payload;
            break;
        case "dec":
            return state - action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default logic;
