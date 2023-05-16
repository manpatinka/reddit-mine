import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from '../features/SubredditsSlice';
import feedReducer from '../features/FeedSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    feed: feedReducer,
  },
});
