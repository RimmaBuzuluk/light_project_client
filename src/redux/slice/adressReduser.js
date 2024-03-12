import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAddress = createAsyncThunk('address/fetchAddress', async () => {
	try {
		const { data } = await axios.get('/address');
		return data;
	} catch (error) {
		throw Error('Error fetching address');
	}
});

export const fetchRemoveAddress = createAsyncThunk('address/fetchRemoveAddress', async id => {
	await axios.delete(`/address/${id}`);
});

// export const fetchRebootAddress = createAsyncThunk('address/fetchRemoveAddress', async params => {
// 	await axios.put(`/addresSatus`, params);
// });

const initialState = {
	items: [],
	status: 'loading',
};

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			//отримання тегів
			.addCase(fetchAddress.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchAddress.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'loaded';
			})
			.addCase(fetchAddress.rejected, state => {
				state.items = [];
				state.status = 'error';
			})
			//видалення статті
			.addCase(fetchRemoveAddress.pending, (state, action) => {
				state.items = state.items.filter(obj => obj._id !== action.meta.arg);
			});
		// оновлення значення статусу після успішного виконання fetchRebootAddress
		// .addCase(fetchRebootAddress.fulfilled, (state, action) => {
		// 	// Отримайте ідентифікатор адреси, яку ви оновлюєте
		// 	const updatedAddressId = action.payload.addressId;
		// 	// Знайдіть цю адресу у списку і змініть її статус
		// 	const updatedAddressIndex = state.items.findIndex(address => address._id === updatedAddressId);
		// 	if (updatedAddressIndex !== -1) {
		// 		// Знайдено адресу, змініть її статус
		// 		state.items[updatedAddressIndex].status = action.payload.status;
		// 	}
		// });
	},
});

export const addressReducer = addressSlice.reducer;
