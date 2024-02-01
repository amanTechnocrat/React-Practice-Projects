import logic from './log';
import change from './Mode';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    logic,
    change
})
export default rootReducer;
