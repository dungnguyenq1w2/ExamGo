import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Statistics from "./pages/Statistics";
import UserList from "./pages/UserList";

// <li className="px-6 py-2 border-b border-gray-300 w-full hover:bg-gray-500 hover:text-white">
// 	<NavLink
// 		to="/admin"
// 		// style={({ isActive }) => (isActive ? activeStyle : undefined)}
// 	>
// 		Trang chủ
// 	</NavLink>
// </li>
function AdminFeature(props) {
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <div className="flex">
            <div className="h-screen min-w-[20%] max-w-[20%] bg-gray-100 pt-2 border border-gray-200">
                <ul>
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            isActive ? "activeStyle" : undefined
                        }
                    >
                        <li className="flex items-center px-6 py-2 border-b border-gray-300 w-full hover:bg-gray-500 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Trang chủ
                        </li>
                    </NavLink>
                    <NavLink
                        to="users"
                        className={({ isActive }) =>
                            isActive ? "activeStyle" : undefined
                        }
                    >
                        <li className="flex items-center px-6 py-2 border-b border-gray-300 w-full hover:bg-gray-500 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            Quản lý người dùng
                        </li>
                    </NavLink>
                    <NavLink
                        to="statistics"
                        className={({ isActive }) =>
                            isActive ? "activeStyle" : "undefined"
                        }
                    >
                        <li className="flex items-center px-6 py-2 border-b border-gray-300 w-full hover:bg-gray-500 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            Xem thống kê
                        </li>
                    </NavLink>
                </ul>
                <div className="flex px-6 py-5">
                    <button className="border px-2 py-1 border-orange-500 rounded-lg text-orange-500 hover:text-white hover:bg-orange-500">
                        Đăng xuất
                    </button>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="add" element={<AddUser />} />
                <Route path="edit" element={<EditUser />} />
                <Route path="users" element={<UserList />} />
                <Route path="statistics" element={<Statistics />} />
            </Routes>
        </div>
    );
}

AdminFeature.propTypes = {};

export default AdminFeature;
