import { createBrowserRouter } from "react-router-dom";
import AddAToy from "../Components/AddAToy/AddAToy";
import AllToys from "../Components/AllToys/AllToys";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import MyToy from "../Components/MyToy/MyToy";
import Blog from "../Components/Blog/Blog";
import Register from "../Components/Reginster/Register";
import Main from "../Components/layout/Main";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addtoy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
      },
      {
        path: "mytoy",
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://a-11-server-side.vercel.app/singleCars/${params.id}`)
      }, 

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default routes;
