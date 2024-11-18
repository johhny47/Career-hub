import { createBrowserRouter, Router } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home";
import Details from "../Component/Details";

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
                element:<Details></Details>,
                loader:async({params})=>{
                    const res =await fetch("/career.json")
                    const data = await res.json()
                  const  singleData = data.find(d=>d.id == params.id)
                    console.log(data)
                    return singleData
                }
            }
        ]
    }

])
export default router;