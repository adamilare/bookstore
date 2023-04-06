import { createSlice } from '@reduxjs/toolkit';
import { getBooks, addBook, removeBook } from './bookThunk';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const makeBookId = ({ books }) => {
  if (books && books.length > 0) {
    const lastId = books[books.length - 1].item_id;
    const newId = Number(lastId.slice(4)) + 1;

    return `item${newId}`;
  }

  return 'item1';
};

const addBookReducer = (state, { payload }) => {
  state.books.push({
    item_id: makeBookId(state),
    title: payload.title,
    author: payload.author,
    category: payload.category,
  });
};

const removeBookReducer = (state, { payload: id }) => {
  const filterBooks = state.books.filter((book) => book.item_id !== id);
  return { ...state, books: filterBooks };
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.books = payload;
      })
      .addCase(getBooks.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default booksSlice.reducer;
