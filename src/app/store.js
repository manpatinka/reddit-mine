import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer  from '../features/SubredditsSlice';
import feedReducer from '../features/FeedSlice';
import commentsReducer from '../features/CommentsSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    feed: feedReducer,
    comments: commentsReducer
  },
});
