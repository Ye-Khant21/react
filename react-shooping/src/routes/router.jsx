import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    
    children :[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"my-cart",
            element:<MyCart/>
        },
        {
            path:"product-detail/:id",
            element:<ProductDetail/>
        },
    ],
}

])
export default router;