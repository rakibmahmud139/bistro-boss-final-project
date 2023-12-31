import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to have dynamic isAdmin based on data 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils />Add An Item</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaWallet />Manage Items </NavLink></li>
                                <li><NavLink to='/'><FaBook />Manage Booking(Not Implemented) </NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers />All User </NavLink></li>

                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                                <li><NavLink to='/'><FaCalendarAlt />Reservations</NavLink></li>
                                <li><NavLink to='/'><FaWallet />Payment History</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/myCart'><FaShoppingCart />My Cart
                                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* Sidebar content here */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;