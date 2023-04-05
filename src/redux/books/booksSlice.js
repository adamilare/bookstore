import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
