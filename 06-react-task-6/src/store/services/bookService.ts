import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Fetch Books
export const fetchBooks = createAsyncThunk(
  'fetch/books',
  async ({ search, filter, printType, sortBy }: any) => {
    console.log(search, filter, printType, sortBy);
    try {
      const response = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${filter}&printType=${printType}&orderBy=${sortBy}&startIndex=0&maxResults=40&key=${process.env.BOOK_API_KEY}`
      );
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
