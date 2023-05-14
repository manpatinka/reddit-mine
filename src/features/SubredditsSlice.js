import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async() => {
        const res = await fetch(`https://www.reddit.com/subreddits.json`);
        const data = await res.json();
        const subreddits = data.data.children.map(child =>  child.data.display_name_prefixed );
        return subreddits;
    }
)

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        hasError: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.subreddits = action.payload;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectSubreddits = state => state.subreddits.subreddits
export default subredditsSlice.reducer