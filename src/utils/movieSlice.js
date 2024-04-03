import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        videoTrialer : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies= action.payload;
        },
        addVideoTrialer : (state,action) => {
            state.videoTrialer= action.payload;
        },
    }
});

export const {addNowPlayingMovies, addVideoTrialer} = movieSlice.actions;

export default movieSlice.reducer;