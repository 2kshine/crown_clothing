//Root reducer becomes the Code that combines all the states together.

import { combineReducers } from "redux";

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})
