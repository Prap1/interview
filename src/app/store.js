import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import userReducer from "../features/userSlice"
import domainReducer from "../features/domainSlice"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        users: userReducer,
        domains: domainReducer,
    }
});
