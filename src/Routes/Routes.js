import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Category from "../Components/Pages/Category/Category";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Course from "../Components/Pages/Course/Course";
import Courses from "../Components/Pages/Courses/Courses";
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
                element: <Course></Course>,
                loader: () => fetch('https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course')
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
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course/${params.id}`)
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/course/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-imtiaz-uddin28.vercel.app/category/${params.id}`)
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>,
            },
            {
                path: 'blog',
                element: <Blog></Blog> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'*',
                element: <Error></Error>
            }
        ]
    }
])