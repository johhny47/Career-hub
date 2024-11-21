import { createBrowserRouter, Router } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Details from "../Component/Details";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import ErrorPage from "../Component/ErrorPage";
import MyProfile from "../Component/MyProfile";
import Blog from "../Component/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<Login></Login>,
                children:[
                  
                ]
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/profile",
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:"/blog",
                element:<PrivateRoute><Blog></Blog></PrivateRoute>,
                loader:()=>fetch("blog.json")
            }
        ]
    }

])
export default router;