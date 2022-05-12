import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/ProfilePage';
import OwnerProfilePage from './pages/OwnerProfilePage';

function UserFeature(props) {
	return (
		<Routes>
			<Route path="/" element={<ListPage />} />
			<Route path="/:userId" element={<ProfilePage />} />
			<Route path="me" element={<OwnerProfilePage />} />
		</Routes>
	);
}

UserFeature.propTypes = {};

export default UserFeature;
