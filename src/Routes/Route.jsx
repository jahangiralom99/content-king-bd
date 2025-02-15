import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Home/>
            }
        ]
    }
])

export default Route;