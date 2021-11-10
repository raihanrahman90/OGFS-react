import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

// We call state in here
export default combineReducers({
    login: loginReducer,
});