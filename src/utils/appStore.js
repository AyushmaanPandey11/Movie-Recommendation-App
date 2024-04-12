import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import SearchMovieReducer from "./SearchMovieSlice";

const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : movieReducer,
            gpt : gptReducer,
            config: configReducer,
            SearchMovie: SearchMovieReducer,
        },
    },
);

export default appStore;