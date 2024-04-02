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
# Project Layout 
- Login/Signup Form
    - Header 
    - SignUp & Login From
    -Redirecting to browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
        - Trailer
        - Movie Name & Desc
    - Movie Suggestions
    - Movie List*n || Movie Categories
- Netflix-gpt
    - Search-Bar
    - Movie Suggestion