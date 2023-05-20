import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Error_page from "./components/Error/Error_page.jsx";
import Home from "./components/Home/Home.jsx";
import First from "./components/First/First.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement:<Error_page></Error_page>
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<Error_page></Error_page>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendID',
        element:<FriendDetails></FriendDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
