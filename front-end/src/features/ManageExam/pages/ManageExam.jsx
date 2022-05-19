import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageBody from '../components/ManageBody';
import TeacherInfo from '../components/TeacherInfo';

const examListTest = [
	{
		id: 1,
		title: 'Đề ôn thi THPT Quốc gia môn Lịch sử năm 2021 có đáp án (Đề 3)',
		minuteLimit: 60,
		createdAt: '01/01/2022',
		rate: 4,
	},
	{
		id: 2,
		title: 'Đề kiểm tra 1 tiết môn Lịch Sử năm 2022',
		minuteLimit: 60,
		createdAt: '02/02/2022',
		rate: 3.5,
	},
	{
		id: 3,
		title: 'Đề kiểm tra 15 phút môn Lịch Sử năm 2022',
		minuteLimit: 15,
		createdAt: '01/20/2022',
		rate: 4.5,
	},
	{
		id: 4,
		title: 'Đề thi thử môn Lịch Sử năm 2022',
		minuteLimit: 60,
		createdAt: '23/03/2022',
		rate: 5,
	},
	{
		id: 5,
		title: 'Đề thi thử lần 2 môn Lịch Sử năm 2022',
		minuteLimit: 60,
		createdAt: '27/03/2022',
		rate: 5,
	},
];

function ManageExam() {
	const [examList, setExamList] = useState();

	useEffect(() => {
		setExamList(examListTest);
	}, []);

	const handleDeleteExam = (examId) => {
		const idxExam = examList.findIndex((e) => e.id === examId);
		const newExamList = [...examList];
		newExamList.splice(idxExam, 1);
		setExamList([...newExamList]);
	};

	return (
		<div className="flex h-full">
			<TeacherInfo />
			<ManageBody examList={examList} handleDeleteExam={handleDeleteExam} />
		</div>
	);
}

export default ManageExam;
