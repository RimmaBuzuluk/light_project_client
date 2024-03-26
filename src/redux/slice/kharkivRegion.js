import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchRegion = createAsyncThunk('region/fetchRegion', async () => {
	try {
		const { data } = await axios.get('/region');
		return data;
	} catch (err) {
		throw Error('Error fetching region');
	}
});

const initialState = {
	item: [],
	status: 'loading',
};

const regionSlice = createSlice({
	name: 'region',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRegion.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchRegion.fulfilled, (state, action) => {
				state.status = 'loaded';
				state.item = action.payload;
			})
			.addCase(fetchRegion.rejected, state => {
				state.item = [];
				state.status = 'error';
			});
	},
});

export const regionReduser = regionSlice.reducer;
