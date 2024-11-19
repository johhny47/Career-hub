import { createBrowserRouter, Router } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Details from "../Component/Details";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                loader:()=>fetch("/career.json"),
                children:[
                   
                ]
            },
            {
                path: "/details/:id",
                element: <PrivateRoute>
                    <Details></Details> </PrivateRoute>,
                loader:async({params})=>{
                    const res =await fetch("/career.json")
                    const data = await res.json()
                  const  singleData = data.find(d=>d.id == params.id)
                  
                    return singleData;

                }
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }

])
export default router;