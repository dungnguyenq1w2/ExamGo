import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditExamForm from '../components/EditExamForm';

const exam1 = {
	id: 32,
	name: 'Đề thi 15 phút Địa Lý 12 2',
	maxDuration: 15,
	createdTime: '2022-06-22T01:17:14',
	teacherId: 14,
	subjectId: 7,
	isDeleted: 0,
	isDone: 0,
	numOfQuestions: 0,
	questionList: [
		{
			id: 42,
			content: 'Địa lý là gì',
			correctAnswerId: 149,
			examId: 32,
			answerList: [
				{
					id: 149,
					content: 'Là Địa Lý',
					questionId: 42,
				},
				{
					id: 150,
					content: 'Là Lịch Sử',
					questionId: 42,
				},
				{
					id: 151,
					content: 'Là Hóa Học',
					questionId: 42,
				},
				{
					id: 152,
					content: 'Là Toán Học',
					questionId: 42,
				},
			],
		},
		{
			id: 43,
			content: '1 + 1 =',
			correctAnswerId: 155,
			examId: 32,
			answerList: [
				{
					id: 153,
					content: '1',
					questionId: 43,
				},
				{
					id: 154,
					content: '2',
					questionId: 43,
				},
				{
					id: 155,
					content: '3',
					questionId: 43,
				},
				{
					id: 156,
					content: '4',
					questionId: 43,
				},
			],
		},
	],
	teacher: null,
};

function EditExam() {
	const [exam, setExam] = useState(exam1);
	// {
	// 	_id: '61e3f41a3b7773d24d08c683',
	// 	name: 'Đề kiểm tra 15 phút Lịch Sử 12',
	// 	openedAt: '2022-01-16T08:34:24.636Z',
	// 	closedAt: '2022-01-16T08:34:24.636Z',
	// 	creator: {
	// 		_id: '61cf495623ef54e066d11ebb',
	// 		name: 'Giáo viên 2',
	// 	},
	// 	attemptLimit: 1,
	// 	minuteLimit: 15,
	// 	questions: [
	// 		{
	// 			_id: '61e3f4183b7773d24d08c66d',
	// 			content: 'Hội nghị Ianta (1945) có sự tham gia của các nước nào?',
	// 			options: [
	// 				{
	// 					_id: '61e3f4173b7773d24d08c665',
	// 					content: 'Anh - Pháp - Mĩ.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f4173b7773d24d08c667',
	// 					content: 'Anh - Mĩ - Liên Xô.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f457f5ee57a712a933c2',
	// 					content: 'Anh - Pháp',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f4183b7773d24d08c66b',
	// 					content: 'Mĩ - Liên Xô - Trung Quốc.',
	// 					__v: 0,
	// 				},
	// 			],
	// 			correctOption: {
	// 				_id: '61e3f4173b7773d24d08c667',
	// 				content: 'Anh - Mĩ - Liên Xô.',
	// 				__v: 0,
	// 			},
	// 		},
	// 		{
	// 			_id: '61e3f4193b7773d24d08c677',
	// 			content:
	// 				'Tương lai của Nhật Bản được quyết định như thế nào theo Hội nghị Ianta (2-1945)?',
	// 			options: [
	// 				{
	// 					_id: '61e3f4183b7773d24d08c66f',
	// 					content: 'Nhật Bản bị quân đội Mĩ chiếm đóng.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f4183b7773d24d08c671',
	// 					content: 'Nhật Bản vẫn giữ nguyên trạng.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f4193b7773d24d08c673',
	// 					content: 'Quân đội Liên Xô chiếm 4 đảo thuộc quần đảo Curin của Nhật Bản.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f4193b7773d24d08c675',
	// 					content: 'Nhật Bản trở thành thuộc địa kiểu mới của Mĩ.',
	// 					__v: 0,
	// 				},
	// 			],
	// 			correctOption: {
	// 				_id: '61e3f4193b7773d24d08c673',
	// 				content: 'Quân đội Liên Xô chiếm 4 đảo thuộc quần đảo Curin của Nhật Bản.',
	// 				__v: 0,
	// 			},
	// 		},
	// 		{
	// 			_id: '61e3f41a3b7773d24d08c681',
	// 			content:
	// 				'Hội nghị Ianta được triệu tập vào thời điểm nào của cuộc Chiến tranh thế giới thứ hai (1939 – 1945)?',
	// 			options: [
	// 				{
	// 					_id: '61e3f4193b7773d24d08c679',
	// 					content: 'Chiến tranh thế giới thứ hai bùng nổ',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f41a3b7773d24d08c67b',
	// 					content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn ác liệt',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f41a3b7773d24d08c67d',
	// 					content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f459f5ee57a712a938fc',
	// 					content: 'Chiến tranh thế giới thứ hai bắt đầu',
	// 					__v: 0,
	// 				},
	// 			],
	// 			correctOption: {
	// 				_id: '61e3f41a3b7773d24d08c67b',
	// 				content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn ác liệt',
	// 				__v: 0,
	// 			},
	// 		},
	// 		{
	// 			_id: '61e3f45bf5ee57a712a93c0a',
	// 			content:
	// 				'Theo quyết định của hội nghị Ianta (2-1945), quốc gia nào cần phải trở thành một quốc gia thống nhất và dân chủ?',
	// 			correctOption: {
	// 				_id: '61cb27844e269af4d8615be3',
	// 				content: 'Trung Quốc',
	// 				__v: 0,
	// 			},
	// 			options: [
	// 				{
	// 					_id: '61e3f45af5ee57a712a93a08',
	// 					content: 'Đức',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f45af5ee57a712a93aa3',
	// 					content: 'Mông Cổ',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61cb27844e269af4d8615be3',
	// 					content: 'Trung Quốc',
	// 					__v: 0,
	// 				},
	// 				{
	// 					_id: '61e3f45af5ee57a712a93bbf',
	// 					content: 'Triều Tiên',
	// 					__v: 0,
	// 				},
	// 			],
	// 		},
	// 	],
	// 	subject: 'Lịch sử',
	// 	grade: 12,
	// 	isDeleted: false,
	// 	__v: 0,
	// }
	// useEffect(() => {
	// 	const fetchExam = async () => {
	// 		try {
	// 			const id = '61e3f41a3b7773d24d08c683';

	// 			const url = `${process.env.REACT_APP_API_URL}/exams/${id}/update`;
	// 			console.log(url);
	// 			//const token = localStorage.getItem("REFRESH_TOKEN");
	// 			const res = await axios.get(url, {
	// 				headers: {
	// 					access_token:
	// 						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWNmNDk1NjIzZWY1NGUwNjZkMTFlYmIiLCJpYXQiOjE2NTU4OTMzMTMsImV4cCI6MTY1NjE1MjUxM30.el6Hae1mJAIKdicZw3tFgjCJvCzv4W3AKUv_2ilrLvs',
	// 				},
	// 			});
	// 			if (res.data) setExam(res.data);
	// 		} catch (error) {
	// 			console.log('Failed to fetch exam:', error);
	// 		}
	// 	};
	// 	fetchExam();
	// }, []);
	return (
		<div className="p-5">
			<EditExamForm exam={exam} />
		</div>
	);
}

export default EditExam;
