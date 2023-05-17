import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async(permalink) => {
        const res = await fetch(`https://www.reddit.com${permalink}.json`);
        const json = await res.json();
        const comments = json[1].data.children.map(comments => comments.data);
        return comments;
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectComments = state => state.comments.comments;
export default commentsSlice.reducer;