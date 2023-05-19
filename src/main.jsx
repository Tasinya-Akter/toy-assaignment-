import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './Firebase/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Home from './Pages/Home/Home.jsx';
import AllToys from './Pages/AllToys/AllToys.jsx';
import ToyDetails from './Components/ToyDetails/ToyDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/all_toys",
        element: <AllToys></AllToys>
      },
      {
        path: "/toy_details/:id",
        element: <ToyDetails></ToyDetails>,
        loader: (({params}) => fetch(`http://localhost:5000/details/${params.id}`))
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
,
)
