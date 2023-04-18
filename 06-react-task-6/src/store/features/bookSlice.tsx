import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../services/bookService';

export interface BookState {
  books: any;
  isLoading: boolean;
  error: any;
}

const initialState: BookState = {
  books: {},
  isLoading: false,
  error: {},
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.books = action.payload;
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
