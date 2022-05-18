import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Statistics from './pages/Statistics';
import UserList from './pages/UserList';

function AdminFeature(props) {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="add" element={<AddUser />} />
			<Route path="edit" element={<EditUser />} />
			<Route path="users" element={<UserList />} />
			<Route path="statistics" element={<Statistics />} />
		</Routes>
	);
}

AdminFeature.propTypes = {};

export default AdminFeature;
