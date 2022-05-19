import React from 'react';
import ManageBody from '../components/ManageBody';
import TeacherInfo from '../components/TeacherInfo';

function ManageExam() {
	return (
		<div className="flex h-full">
			<TeacherInfo />
			<ManageBody />
		</div>
	);
}

export default ManageExam;
