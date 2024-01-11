import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchCity=createAsyncThunk('city/fetchCity', async () => {
    try {
        const { data } = await axios.get('/cities');
        return data;
    } catch (error) {
        throw Error('Error fetching cities');
    }
})

const initialState={
    items:[],
    status:'loading'
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            //отримання тегів
            .addCase(fetchCity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCity.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchCity.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
    }
})

export const cityReducer = citySlice.reducer;

