import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedRegion: null,
};

const regionSlice = createSlice({
	name: 'selectedRegion',
	initialState,
	reducers: {
		setSelectedRegion: (state, action) => {
			state.selectedRegion = action.payload;
		},
	},
});

export const { setSelectedRegion } = regionSlice.actions;
export const regionSelected = regionSlice.reducer;
