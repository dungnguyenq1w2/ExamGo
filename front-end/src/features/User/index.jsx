import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import EditInfo from './pages/EditInfo'
function UserFeature(props) {
	return (
		<Routes>
			<Route path="me" element={<UserProfile />} />
			<Route path="edit" element={<EditInfo />} />
		</Routes>
	);
}

UserFeature.propTypes = {};

export default UserFeature;
