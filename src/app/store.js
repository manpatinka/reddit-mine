import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from '../features/SubredditsSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
  },
});
