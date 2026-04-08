import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import API from "../api/axios";


export const fetchDomains = createAsyncThunk(
    "domains/get",
    async ()=>{
        const res = await API.get("/user/domains");
        return res.data;
    }
);

export const createDomain = createAsyncThunk("domains/create",
    async(data)=>{
       const res= await API.post("/user/domains", data);
        return res.data;
    }
)

const domainSlice = createSlice({
    name: "domains",
    initialState:{
        domains: [] },
        reducers:{

        },
  extraReducers: (builder) => {
  builder
    .addCase(fetchDomains.fulfilled, (state, action) => {
      state.domains = action.payload;
    })
    .addCase(createDomain.fulfilled, (state, action) => {
      state.domains.push(action.payload);
    }); 
}

    
})

export default domainSlice.reducer;