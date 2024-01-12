import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchAddress = createAsyncThunk('address/fetchAddress', async () => {
    try {
        const { data } = await axios.get('/address');
        return data;
    } catch (error) {
        throw Error('Error fetching address');
    }
});

export const fetchRemoveAddress = createAsyncThunk('address/fetchRemoveAddress', async (id) => {
    await axios.delete(`/address/${id}`);    
});

const initialState={
    items:[],
    status:'loading'
}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            //отримання тегів
            .addCase(fetchAddress.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAddress.rejected, (state) => {
                state.items = [];
                state.status = 'error';
            })
            //видалення статті
            .addCase(fetchRemoveAddress.pending, (state, action)=>{
                state.items=state.items.filter((obj)=> obj._id !==action.meta.arg)
            })
    }
})

export const addressReducer = addressSlice.reducer;

