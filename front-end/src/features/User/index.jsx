import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';

function UserFeature(props) {
	return (
		<Routes>
			<Route path="me" element={<UserProfile />} />
		</Routes>
	);
}

UserFeature.propTypes = {};

export default UserFeature;
