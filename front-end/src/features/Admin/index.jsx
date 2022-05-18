import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Statistics from './pages/Statistics';
import UserList from './pages/UserList';

function AdminFeature(props) {
	return (
		<div className="flex space-x-60">
			<div className="basis-[20%]">
				<ul>
					<li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-500 hover:text-white">
						<NavLink
							to="/admin"
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Trang chủ
						</NavLink>
					</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-500 hover:text-white">
						<NavLink
							to="/admin/users"
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Quản lý người dùng
						</NavLink>
					</li>
					<li className="px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-500 hover:text-white">
						<NavLink
							to="/admin/statistics"
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Xem thống kê
						</NavLink>
					</li>
				</ul>
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
