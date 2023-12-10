import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchAuth=createAsyncThunk('auth/fetchAuth', async (params)=>{
    const {data}=await axios.post('user/login', params);
    return data
})

const initialState={
    data:null,
    status:'loading',
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.data=null;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchAuth.pending, (state) => {
                state.status = 'loading';
                state.data=null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.data = null;
                state.status = 'error';
            });
    }
})


export const selectIsAuth=state=>Boolean(state.auth.data)
export const authReducer=authSlice.reducer
export const {logout}= authSlice.actions