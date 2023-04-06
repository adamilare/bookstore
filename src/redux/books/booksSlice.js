import { createSlice } from '@reduxjs/toolkit';
import { getBooks, addBook, removeBook } from './bookThunk';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({ ...state, loading: true }))
      .addCase(getBooks.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: null,
        books: payload,
      }))
      .addCase(getBooks.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(addBook.pending, (state) => ({ ...state, loading: true }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        loading: false,
        error: null,
      }))
      .addCase(addBook.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(removeBook.pending, (state) => ({ ...state, loading: true }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        loading: false,
        error: null,
      }))
      .addCase(removeBook.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export default booksSlice.reducer;
