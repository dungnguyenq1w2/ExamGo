import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CreateExam from './pages/CreateExam';
import EditExam from './pages/EditExam';
import ManageExam from './pages/ManageExam';

function ManageExamFeature(props) {
	return (
		<Routes>
			<Route path="/" element={<ManageExam />} />
			<Route path="/create" element={<CreateExam />} />
			<Route path="/edit" element={<EditExam />} />
		</Routes>
	);
}

ManageExamFeature.propTypes = {};

export default ManageExamFeature;
