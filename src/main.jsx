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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/category'),
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch('http://localhost:5000/painting')
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
        element: <PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/addCraft",
        element: <PrivateRoute>
          <AddCraft></AddCraft>
        </PrivateRoute>
      },
      {
        path: "/updateCraft/:id",
        element: <PrivateRoute>
          <UpdateCraft></UpdateCraft>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/painting/${params.id}`)
      },
      {
        path: "/myCraftList",
        element: <PrivateRoute>
          <MyCraftList></MyCraftList>
        </PrivateRoute>,
      },
      {
        path: "/category/:id",
        element: <CategoriesCard></CategoriesCard>,
        
      },
      {
        path: "/painting/:_id",
        element: <PrivateRoute>
          <PaintingCardDetails></PaintingCardDetails>
        </PrivateRoute>,
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
