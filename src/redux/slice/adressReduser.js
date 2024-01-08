// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import axios from "../../axios"

// export const fetchAdress=createAsyncThunk('adress/fetchAdress', async()=>{
//     const {data}=await axios.get('/adress/')
//     return data
// })

// export const addNewAdress=createAsyncThunk('adress/addNewAdress',async(params)=>{
//     const {data}=await axios.post('/adress/',params)
//     return data
// })


// const initialState={
//     adress:{
//         items:[],
//         status:'loading'
//     }
// }

// const adressSlice=createSlice({
//     name:'adress',
//     initialState,
//     reducers:{},
//     extraReducers:(builder)=>{
//         builder
//             .addCase(fetchAdress.pending, (state) => {
//                 state.adress.status = 'loading';
//             })
//             .addCase(fetchAdress.fulfilled, (state, action) => {
//                 state.adress.items = action.payload;
//                 state.adress.status = 'loaded';
//             })
//             .addCase(fetchAdress.rejected, (state) => {
//                 state.adress.items = [];
//                 state.adress.status = 'error';
//             })
//             .addCase(addNewAdress.pending, (state) => {
//                 state.adress.status = 'loading';
//             })
//             .addCase(addNewAdress.fulfilled, (state, action) => {
//                 state.adress.items = action.payload;
//                 state.adress.status = 'loaded';
//             })
//             .addCase(addNewAdress.rejected, (state) => {
//                 state.adress.items = [];
//                 state.adress.status = 'error';
//             });
//     }
// })

// export const adressReducer =adressSlice.reducer


