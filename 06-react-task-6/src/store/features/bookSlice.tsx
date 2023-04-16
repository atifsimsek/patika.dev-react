import { createSlice } from '@reduxjs/toolkit';

export interface BookState {}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
