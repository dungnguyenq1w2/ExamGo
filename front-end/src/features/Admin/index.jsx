import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import OwnerProfilePage from './pages/OwnerProfilePage';
import ProfilePage from './pages/ProfilePage';

function AdminFeature(props) {
	return (
		<Routes>
			<Route path="/" element={<ListPage />} />
		</Routes>
	);
}

AdminFeature.propTypes = {};

export default AdminFeature;
