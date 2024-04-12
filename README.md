# About 
    - This is my Second project BY learning React . This Project will be Clone of the Netflix page and covers the features that
      netflix page has, only frontend part of it. 

# Netflix-GPt 
- Create React app
- configured tailwind
- Routing in Body.js
- Header
- Login/SignUp Form
- Form Validation using UseRef Hook and regex
- Created and Hoist the project to firebas
- Deployed in firebase
- Firebase Signin/SignUp password authentication
- Redux Store
- user cartSlice 
- Used updateProfile, Signout, onAuthChanged from firebase api to store and update values in redux store
- Bug fix - Redirecting the unaouth user to login page and authorised user to browse page 
            - onAuthChanged is defined in the Header Component as header will be available in rendering of any component
            and we are navigating only from here and whenever there will be change in auth this function will be called and it will navigate.
- Bug fix - Unsubscribe the onAuthChanged callback(Good Practise).
- Used tmdb api for NowPlaying Movie and used it in the useNowPlayingMovies for fetching.
- Fetching VideoTrialer in MainContainer. Video Title & Video Background  
- Storing data to redux of nowplaing movies, videoTrailer, TopRated, Upcoming and Popular
- Customize hooks for nowPlaying Movies, TopRated, Upcoming and Popular
- Embedded the Youtube video with autoplay and mute 
- GPT page with 
    - Gpt search Bar
    - Gpt content
- Added a Multi-Language Feature in our App
- Integrate Gpt Apis( get open ai key )
- Received result from openai api and used the result to fetch movie details from tmdb search movie api.
- Store the data of movieName and movieResult to redux store.
- NOTE : Openai takes money to use after a time to use their api so error can come in search your movie 
- Memoization of fetched data. ( Reduced redundant api calls from useEffect Hook ).
- Create Page for Movie Details ( TMDB movie search api used ) Created new slice for searchMovie data and Stored in the Redux cart




# Project Layout 
- Login/Signup Form
    - Header 
    - SignUp & Login From
    -Redirecting to browse Page
- Browse (after Authentication)
    - Header
    - Main Movie ( Main Container )
        - Trailer
        - Movie Name & Desc
    - Movie Suggestions List*n ( Vertically ) (Secondary Container)
        - Movies Cards*n (horizontally)
- Netflix-gpt
    - Search-Bar
    - Movie Suggestion