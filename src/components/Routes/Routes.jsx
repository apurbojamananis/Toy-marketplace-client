import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";

import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import SingleToy from "../Pages/Toys/SingleToy/SingleToy";
import MyToys from "../Pages/Toys/MyToys/MyToys";
import PrivetRoutes from "./PrivetRoutes";
import UpdateToy from "../Pages/Toys/UpdateToy/UpdateToy";
import Blogs from "../Pages/Blogs/Blogs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoys",
        element: (
          <PrivetRoutes>
            <AddToys></AddToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "https://b7a11-toy-marketplace-server-kappa.vercel.app/alltoys"
          ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoutes>
            <SingleToy></SingleToy>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-kappa.vercel.app/toy/${params.id}`
          ),
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoutes>
            <MyToys></MyToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      // {
      //   path: "/gallery",
      //   element: <Gallery></Gallery>,
      //   loader: () => fetch("http://localhost:5000/gallery"),
      // },
    ],
  },
]);

export default Router;
