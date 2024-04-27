import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import UserProfile from './Components/userProfile/userProfile';
import AddCraft from './Components/AddCraft/AddCraft';
import UpdateCraft from './Components/UpdateCraft/UpdateCraft';
import PaintingCardDetails from './Components/PaintingCardDetails/PaintingCardDetails';
import CategoriesCard from './Components/CategoriesCard/CategoriesCard';
import MyCraftList from './Components/ MyCraftList/ MyCraftList';
import AllArtCraft from './Components/AllArtCraft/AllArtCraft';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/category')
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft></AllArtCraft>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/addCraft",
        element: <AddCraft></AddCraft>
      },
      {
        path: "/updateCraft/:id",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({params}) => fetch(`http://localhost:5000/painting/${params.id}`)
      },
      {
        path: "/myCraftList",
        element: <MyCraftList></MyCraftList>
      },
      {
        path: "/categoriesCard",
        element: <CategoriesCard></CategoriesCard>,
        loader: () => fetch('http://localhost:5000/painting')
      },
      {
        path: "/painting/:_id",
        element: <PaintingCardDetails></PaintingCardDetails>,
        loader: () => fetch('http://localhost:5000/painting')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
