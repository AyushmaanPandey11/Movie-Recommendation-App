import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import Error from "./Error";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path:"/browse",
      element:<Browse />
    },
    {
      path:"/error",
      element:<Error />
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