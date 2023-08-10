import { createBrowserRouter } from "react-router-dom";
import AddAToy from "../Components/AddAToy/AddAToy";
import AddChampions from "../Components/AddChampion/AddChampions";
import AllToys from "../Components/AllToys/AllToys";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import MyToy from "../Components/MyToy/MyToy";
import Register from "../Components/Reginster/Register";
import Main from "../Components/layout/Main";
// import  from "./";

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
        element: <><AddAToy></AddAToy></>,
      },
      {
        path: "mytoy",
        element: <><MyToy></MyToy></>,
      },
      {
        path: "add-champions",
        element: <><AddChampions></AddChampions></>
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
        element: <><Details></Details></>,
        loader: ({params}) => fetch(`https://a-11-server-side.vercel.app/singleCars/${params.id}`)
      }, 

    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default routes;
