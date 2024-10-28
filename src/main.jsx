import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header.jsx';
import Nav from './component/Nav/Nav.jsx';
import Contact from './component/Contact.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import User from './component/User/User.jsx';
import UserDetails from './component/detailsUsers/UserDetails.jsx';
import Comments from './component/comments/Comments.jsx';
import CommentsId from './component/CommentSpecificData/CommentsId.jsx';
import Error from './component/Error/Error.jsx';
import Meals from './component/meals/Meals.jsx';
import PhotosId from './component/Photos/PhotosId.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/user",
        loader:(()=>fetch("https://jsonplaceholder.typicode.com/users")),
        element: <User></User>,
      },
      {
        path: "/user/:userId",
        loader:(({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/comment",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/comments"),
        element:<Comments></Comments>,
      },
      {
        path: "/comment/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`),
        element:<CommentsId></CommentsId>,
      },
      {
        path: "/photos",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/photos"),
        element:<Meals></Meals>,
      },
      {
        path: "/photos/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
        element:<PhotosId></PhotosId>,
      },
    ],
  },
  // {
  //   path: "Header",
  //   element: <Nav></Nav>,
  // },
  // {
  //   path: "/setting",
  //   element: <div>Hello Setting</div>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
