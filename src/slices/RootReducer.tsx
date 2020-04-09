import { combineReducers } from "redux";
import usersReducer from './Users';

const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;
