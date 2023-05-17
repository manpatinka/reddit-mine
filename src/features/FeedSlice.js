import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/fetchFeed',
    async(args) => {
        const subreddit = args.selectedSubreddit;
        const filter = args.selectedFilter;
        const res = await fetch(`https://www.reddit.com/${subreddit}/${filter}.json`);
        const json = await res.json();
        const feed = json.data.children.map(post => post.data);
        return feed;
    }
)

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        selectedSubreddit: 'r/popular',
        selectedFilter: 'top',
        isLoading: false,
        hasError: false
    },
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSelectedFilter(state, action) {
            state.selectedFilter = action.payload
        }
    },
    extraReducers: {
        [fetchFeed.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchFeed.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.feed = action.payload;
        },
        [fetchFeed.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }

})

export const selectFeed = state => state.feed.feed;
export const selectSelectedSubreddit = state => state.feed.selectedSubreddit;
export const selectSelectedFilter = state => state.feed.selectedFilter;
export const { setSelectedSubreddit, setSelectedFilter } = feedSlice.actions;
export default feedSlice.reducer;