import { createSlice } from "@reduxjs/toolkit";
const SearchMovieSlice = createSlice(
    {
        name : "SearchMovie",
        initialState: {
            movieTrailer: null,
            SearchMovieDetails:null,
        },
        reducers : {
            addMovieTrialer : (state,action) => {
                state.movieTrailer= action.payload;
            },
            addSearchMovieDetails : (state,action) => {
            state.SearchMovieDetails= action.payload;
        }
        }
    }
);

export const { addMovieTrialer, addSearchMovieDetails } = SearchMovieSlice.actions;
    
export default SearchMovieSlice.reducer;