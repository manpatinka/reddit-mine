import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async(permalink) => {
        const res = await fetch(`https://www.reddi.com${permalink}.json`);
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
export const selectCommentsError = state => state.comments.hasError;

export default commentsSlice.reducer;