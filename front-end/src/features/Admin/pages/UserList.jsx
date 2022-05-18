import React from "react";
import { NavLink } from "react-router-dom";

function UserList() {
    // <div className="mb-4 flex-col">
    //     <div className="absolute pointer-events-auto">
    //         <svg
    //             className="absolute text-slate-400 h-5 w-5"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //         >
    //             <path
    //                 fill-rule="evenodd"
    //                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //                 clip-rule="evenodd"
    //             />
    //         </svg>
    //     </div>
    //     <input type="text" placeholder="Search"></input>
    // </div>
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-x-auto space-y-5">
                        <div className="flex justify-between">
                            <span className="text-lg font-bold">
                                Danh sách người dùng
                            </span>
                            <div className="flex justify-around space-x-10">
                                <div className="space-x-2">
                                    <span className="text-base font-bold">
                                        Vai trò:
                                    </span>
                                    <select className="text-base border border-gray-200 rounded">
                                        <option value="Tất cả" selected>
                                            Tất cả
                                        </option>
                                        <option value="Học sinh">
                                            Học sinh
                                        </option>
                                        <option value="Giáo viên">
                                            Giáo viên
                                        </option>
                                    </select>
                                </div>
                                <div className="space-x-2">
                                    <span className="text-base font-bold">
                                        Sắp xếp theo:
                                    </span>
                                    <select className="text-base">
                                        <option value="Họ tên">Họ tên</option>
                                        <option value="Email">Email</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <table className="min-w-full border border-orange-400">
                            <thead className="border-b bg-orange-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="text-base font-medium text-white px-6 py-4 text-left"
                                    >
                                        STT
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-base font-medium text-white px-6 py-4 text-left"
                                    >
                                        Họ và tên
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-base font-medium text-white px-6 py-4 text-left"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-base font-medium text-white px-6 py-4 text-left"
                                    >
                                        Vai trò
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-white px-6 py-4 text-left"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        1
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        admin
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        nguyenvana@gmail.com
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Quản trị viên
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center space-x-4">
                                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                <NavLink
                                                    to="/admin/edit"
                                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                                >
                                                    Chỉnh sửa
                                                </NavLink>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        2
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Nguyễn Văn C
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        nvc@yahoo.com
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Học sinh
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center space-x-4">
                                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                <NavLink
                                                    to="/admin/edit"
                                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                                >
                                                    Chỉnh sửa
                                                </NavLink>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        3
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Christine Palmer
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        christine.so.cute1010@gmail.com
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Giáo viên
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center space-x-4">
                                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                <NavLink
                                                    to="/admin/edit"
                                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                                >
                                                    Chỉnh sửa
                                                </NavLink>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        4
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Nguyễn Thị B
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        ntb@yahoo.com
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Học sinh
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center space-x-4">
                                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                <NavLink
                                                    to="/admin/edit"
                                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                                >
                                                    Chỉnh sửa
                                                </NavLink>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b border-orange-400 hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        5
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Eternal Socrates
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        socrates@yahoo.com
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        Giáo viên
                                    </td>
                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center justify-center space-x-4">
                                            <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-green-700 hover:border-green-500 rounded-lg">
                                                <NavLink
                                                    to="/admin/edit"
                                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                                >
                                                    Chỉnh sửa
                                                </NavLink>
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-red-700 hover:border-red-500 rounded-lg">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center justify-center">
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                <svg
                                    className="mr-2 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Previous
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-blue-400 bg-white rounded border border-blue-400 hover:bg-blue-400 hover:text-white"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Next
                                <svg
                                    className="ml-2 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white text-base font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                <NavLink
                                    to="/admin/add"
                                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                >
                                    Thêm tài khoản
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
