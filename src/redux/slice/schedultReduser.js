import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSchedult = createAsyncThunk('schedult/fetchSchedult', async () => {
	try {
		const { data } = await axios.get('/schedule');
		return data;
	} catch (error) {
		throw Error('Error fetching schedult');
	}
});

const initialState = {
	items: [],
	status: 'loading',
};

const schedultSlice = createSlice({
	name: 'schedult',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//отримання тегів
			.addCase(fetchSchedult.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchSchedult.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'loaded';
			})
			.addCase(fetchSchedult.rejected, state => {
				state.items = [];
				state.status = 'error';
			});
	},
});

export const schedultReducer = schedultSlice.reducer;
