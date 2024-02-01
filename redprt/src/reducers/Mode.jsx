
const change = (state = "light", action) => {
    switch (action.type) {
        case "changemode":
            if (action.payload == true) {
                return  state = "dark"
            } else {
                return  state = "light";
            }
            break;
        default:
            return state;
            break;
    }
}
export default change;