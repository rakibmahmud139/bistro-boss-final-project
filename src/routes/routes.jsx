import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/HOme";
import Menu from "../pages/menu/menu/Menu";
import Order from "../pages/order/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Secret from "../pages/shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layouts/DashBoard";
import MyCart from "../pages/DashBoard/Mycart/MyCart";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard />,
        children: [
            {
                path: 'myCart',
                element: <MyCart />
            }
        ]
    }
])




export default router;