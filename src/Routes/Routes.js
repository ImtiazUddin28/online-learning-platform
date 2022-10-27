import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Category from "../Components/Pages/Category/Category";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Course from "../Components/Pages/Course/Course";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5001/course')
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/checkout',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5001/course')
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5001/course/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5001/category/${params.id}`)
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>,
            },
            {
                path: 'blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])