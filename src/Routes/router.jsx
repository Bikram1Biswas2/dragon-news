import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsCategory from "../Components/NewsPage/NewsCategory";


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
    path:"/news",
    element:<h1>News Layout</h1>
},
{
    path:"/auth",
    element:<h1>Auth</h1>
},
{
    path:"/login",
    element:<h1>Login</h1>
},
{
    path:"*",
    element:<h1>Error</h1>
}

])

export default router;