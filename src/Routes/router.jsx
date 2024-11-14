import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsCategory from "../Components/NewsPage/NewsCategory";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/NewsPage/Login";
import Register from "../Components/NewsPage/Register";
import NewsDetails from "../Components/NewsPage/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
{
    path:"/",
    element:<HomeLayout></HomeLayout>,
    children:[
        {
          path:"",
          element:<Navigate to={"/category/01"}></Navigate>
        },
        {
            path:"/category/:id",
            element:<NewsCategory></NewsCategory>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
    ]
},
{
    path:"/news/:id",
    element:<PrivateRoute>
        <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
},
{
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
        {
          path:"/auth/login",
          element:<Login></Login>
        },
        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
},

{
    path:"*",
    element:<h1>Error</h1>
}

])

export default router;