import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../services/bookService';

export interface BookState {
  books: any;
}

const initialState: BookState = {
  books: {},
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
