import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from "../api/axios";


export const fetchUsers = createAsyncThunk(
    "user/get",
    async ()=>{
        const res = await API.get("/admin/users");
        return res.data;
    }
);

const userSlice = createSlice({
    name: "users",
    initialState:{user: []},
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.user = action.payload;
        })
    }
})

export default userSlice.reducer;