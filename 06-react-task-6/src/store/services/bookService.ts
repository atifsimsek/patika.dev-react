import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Fetch Books
export const fetchBooks = createAsyncThunk('fetch/books', async (id) => {
  console.log(process.env.BOOK_API_KEY, 'test');

  try {
    const response = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=harry&filter=partial&printType=all&orderBy=relevance&startIndex=0&maxResults=10&key=${process.env.BOOK_API_KEY}`
    );
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
