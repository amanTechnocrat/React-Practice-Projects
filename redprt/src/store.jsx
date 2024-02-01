import { createStore } from 'redux';
import rootReducer from './reducers/Root';

const store = createStore(rootReducer);
export default store;