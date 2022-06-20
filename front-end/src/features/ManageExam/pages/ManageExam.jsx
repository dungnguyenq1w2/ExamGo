import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ManageBody from '../components/ManageBody';
import TeacherInfo from '../components/TeacherInfo';

// const TestExamList = [
// 	{
// 		id: 18,
// 		name: 'Đề thi thử Lịch Sử 12',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:18:23',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	{
// 		id: 19,
// 		name: 'Đề thi thử Lịch Sử 12 1',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:18:54',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	{
// 		id: 20,
// 		name: 'Đề thi thử Lịch Sử 12 2',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:19:16',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	{
// 		id: 21,
// 		name: 'Đề thi thử Lịch Sử 12 3',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:19:45',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	{
// 		id: 22,
// 		name: 'Đề thi thử Lịch Sử 12 4',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:20:35',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	,
// 	{
// 		id: 21,
// 		name: 'Đề thi thử Lịch Sử 12 5',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:19:45',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// 	{
// 		id: 22,
// 		name: 'Đề thi thử Lịch Sử 12 6',
// 		maxDuration: 60,
// 		createdTime: '2022-06-21T00:20:35',
// 		teacherId: 14,
// 		subjectId: 6,
// 		isDeleted: 0,
// 		isDone: 0,
// 		numOfQuestions: 0,
// 		questionList: null,
// 		teacher: null,
// 	},
// ];

function ManageExam() {
	const navigate = useNavigate();

	const [examList, setExamList] = useState();

	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = searchParams.get('page');

	const [pageIndex, setPageIndex] = useState(pageParam);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const fetchExam = async () => {
			try {
				const pageParam = searchParams.get('page');
				const url = `${process.env.REACT_APP_API_URL}/manageexam${
					pageParam ? `?page=${pageParam}` : ''
				}`;

				const token = localStorage.getItem('REFRESH_TOKEN');
				const res = await axios.get(url, {
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJuYW1laWQiOiIxNCIsImV4cCI6MTY1NTgzMTUzNX0.2zFePtYNZTTI6DznJafKTkR8AO9KgfLYDOqi4OrL4qap9biC3l_RpzNN63GNpO9niUiYdc_RW7GRjhZmfIL8yw',
					},
				});
				// const res = await axios.get(url);

				if (res) {
					console.log(res);
					setExamList(res.data);
					setLoading(false);
				}
				// setExam(res.data);
				// setLoading(true);
			} catch (error) {
				console.log('Failed to fetch exam:', error);
			}
		};
		fetchExam();
		// const newExamList = TestExamList.slice((pageIndex - 1) * 5, (pageIndex - 1) * 5 + 5);
		// setExamList([...newExamList]);
	}, [pageIndex]);

	const handleDeleteExam = (examId) => {
		const idxExam = examList.findIndex((e) => e.id === examId);
		const newExamList = [...examList];
		newExamList.splice(idxExam, 1);
		setExamList([...newExamList]);
	};

	const handlePaging = (page) => {
		if (page < 1) return;
		navigate({
			pathname: '/manageexam',
			search: createSearchParams({
				page: page,
			}).toString(),
		});
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
				loading={loading}
			/>
		</div>
	);
}

export default ManageExam;
