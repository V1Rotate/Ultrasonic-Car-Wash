import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWashItems } from './asyncActions';
import { WashItem, WashItemSliceState, Status } from './types';

const initialState: WashItemSliceState = {
  items: [],
  status: Status.LOADING,
};

const washItemSlice = createSlice({
  name: 'washItem',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<WashItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWashItems.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchWashItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchWashItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = washItemSlice.actions;

export default washItemSlice.reducer;
