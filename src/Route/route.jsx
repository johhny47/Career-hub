import { createBrowserRouter, Router } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            }
        ]
    }

])
export default router;