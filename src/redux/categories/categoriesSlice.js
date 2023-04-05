import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const checkStatusReducer = (state) => ({
  ...state,
  status: 'Under construction',
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: checkStatusReducer,
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
