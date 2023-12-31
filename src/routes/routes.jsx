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
import AllUsers from "../pages/DashBoard/AllUser/AllUsers";
import AddItem from "../pages/DashBoard/additem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/mangeItems/ManageItems";
import Payment from "../pages/DashBoard/payment/Payment";
import UserHome from "../pages/DashBoard/userHome/UserHome";
import AdminHome from "../pages/DashBoard/adminHome/AdminHome";





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
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        children: [

            //User Routes
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: 'myCart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },


            //Admin Routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems /></AdminRoute>
            }
        ]
    }
])




export default router;