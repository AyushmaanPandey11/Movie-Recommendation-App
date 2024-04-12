import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Error from "./Error";
import MovieDetails from './MovieDetails';
import { lazy } from 'react';
const Browse = lazy( () => import("./Browse") );


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path:"/browse",
      element:<Suspense fallback={<Error/>} ><Browse /></Suspense>,
      
    },
    {
      path:"/error",
      element:<Error />,
      errorElement: <Error />
    },
    {
      path:"/movie/:movieId",
      element: <MovieDetails />,
      errorElement: <Error />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  )
}

export default Body;