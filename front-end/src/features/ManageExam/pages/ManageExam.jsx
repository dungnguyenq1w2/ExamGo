import axios from 'axios';
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
	const [pageIndex, setPageIndex] = useState(1);

	useEffect(() => {
		// const fetchExam = async () => {
		// 	try {
		// 		const url = `${process.env.REACT_APP_API_URL}/exam?page=${pageIndex}`;

		// 		// const token = localStorage.getItem('REFRESH_TOKEN');
		// 		// const res = await axios.get(url, {
		// 		// 	headers: {
		// 		// 		access_token:
		// 		// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1MmNmYTc2YTcxNzJlMDFiMTY2ZTgiLCJpYXQiOjE2NTI4NDc2NDcsImV4cCI6MTY1MzEwNjg0N30.7C1fIm7vVjaHBHRhaB7KaxnKDljXXNSnwEvPVvdJztM',
		// 		// 	},
		// 		// });
		// 		const res = await axios.get(url);

		// 		// localStorage.setItem(`time_${examId}`, res.data.minuteLimit);
		// 		// if (!localStorage.getItem(`startTime_${examId}`))
		// 		// 	localStorage.setItem(
		// 		// 		`startTime_${examId}`,
		// 		// 		moment().format('DD/MM/YYYY HH:mm:ss'),
		// 		// 	);
		// 		if (res) {
		// 			console.log(res);
		// 		}
		// 		// setExam(res.data);
		// 		// setLoading(true);
		// 	} catch (error) {
		// 		console.log('Failed to fetch exam:', error);
		// 	}
		// };
		// fetchExam();
		const newExamList = examListTest.slice((pageIndex - 1) * 2, (pageIndex - 1) * 2 + 2);
		setExamList([...newExamList]);
	}, [pageIndex]);

	const handleDeleteExam = (examId) => {
		const idxExam = examList.findIndex((e) => e.id === examId);
		const newExamList = [...examList];
		newExamList.splice(idxExam, 1);
		setExamList([...newExamList]);
	};

	const handlePaging = (page) => {
		if (page < 1) return;
		setPageIndex(page);
	};

	return (
		<div className="flex h-full">
			<TeacherInfo />
			<ManageBody
				examList={examList}
				handleDeleteExam={handleDeleteExam}
				pageIndex={pageIndex}
				handlePaging={handlePaging}
			/>
		</div>
	);
}

export default ManageExam;
