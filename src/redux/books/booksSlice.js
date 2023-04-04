import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
    author: 'Damilare Ade',
    category: payload.category,
  });
};

const removeBookReducer = (state, { id }) => {
  state.books = state.books.filter((book) => book.item_id !== id); // eslint-disable-line
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: addBookReducer,
    removeBook: removeBookReducer,
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
