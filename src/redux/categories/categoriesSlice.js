import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const checkStatusReducer = (state) => {
  if (state.categories && state.categories.lenght < 1) {
    state.categories.status = 'Under construction'; // eslint-disable-line
  }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: checkStatusReducer,
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
