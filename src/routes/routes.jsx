import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/layout/Main";
import Home from "../Components/Home/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default routes;