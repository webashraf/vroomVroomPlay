import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Reginster/Register";
import AddAToy from "../Components/AddAToy/AddAToy";
import MyToy from "../Components/MyToy/MyToy";

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
        path:"register",
        element:<Register></Register>
      }, 
      {
        path: "addtoy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "mytoy",
        element: <MyToy></MyToy>
      }
    ],
  },
]);

export default routes;
