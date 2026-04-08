import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from "../api/axios";


export const loginUser = createAsyncThunk(
    "auth/login",
    async (data)=>{
        const res = await API.post("/auth/login", data);
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user: null,
        token: localStorage.getItem("token"),
    },
    reducers: {
        logout: (state)=>{
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(loginUser.fulfilled, (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.user.role);
        })
    }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;