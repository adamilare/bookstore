import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Book from '../../models/Book.model';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/v1yaHjI6RkWuMqX4gAJM/';

const formatBooks = (books) => Object.keys(books).map(
  (key) => new Book(
    key,
    books[key][0].title,
    books[key][0].author,
    books[key][0].category,
  ),
);

const getBooks = createAsyncThunk(
  'books/getBooks',
  async (name, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}books`);

      return fulfillWithValue(formatBooks(data));
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  },
);

const addBook = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue, fulfillWithValue }) => {
    try {
      const sendItem = {
        item_id: book.id,
        ...book,
      };

      await axios.post(`${baseUrl}books/`, sendItem);

      return fulfillWithValue(book);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  },
);

const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${baseUrl}books/${bookId}`, {
        item_id: bookId,
      });
      return fulfillWithValue(bookId);
    } catch (error) {
      return rejectWithValue({ ...error.response.data.error });
    }
  },
);

export { getBooks, addBook, removeBook };
