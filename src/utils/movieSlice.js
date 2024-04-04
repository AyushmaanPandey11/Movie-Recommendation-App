import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        videoTrialer : null,
        PopularMovies:null,
        TopRatedMovies:null,
        UpcomingMovies:null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies= action.payload;
        },
        addVideoTrialer : (state,action) => {
            state.videoTrialer= action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.TopRatedMovies= action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.UpcomingMovies= action.payload;
        },
        
    }
});

export const {addNowPlayingMovies, addVideoTrialer, addPopularMovies,addUpcomingMovies,addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;