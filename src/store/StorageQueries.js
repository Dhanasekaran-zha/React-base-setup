import { createSlice } from '@reduxjs/toolkit';

export const StorageQueries = createSlice({
  name: 'StorageQueries',
  initialState: {
    articles: null,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    clearLocalState: (state) => {
      state.articles = null;
    },
  },
});

export const { setArticles } = StorageQueries.actions;
export default StorageQueries.reducer;
