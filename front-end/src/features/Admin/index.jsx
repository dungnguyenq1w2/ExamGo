import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Statistics from './pages/Statistics';
import UserList from './pages/UserList';

function AdminFeature(props) {
	return (
		<div className="flex">
			<div>
				<ul>
					<li>
						<NavLink
							to="/admin"
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Trang chủ
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/admin/users"
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Quản lý người dùng
						</NavLink>
					</li>
					<li>
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
