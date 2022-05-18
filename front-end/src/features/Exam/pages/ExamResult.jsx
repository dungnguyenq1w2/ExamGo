import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ViewResult from '../components/ViewResult';

function ExamResult() {
	const { examId } = useParams();
	const [examReview, setExamReview] = useState({
		_id: '61e3e15e3b7773d24d08c2ee',
		candidate: '61d52cfa76a7172e01b166e8',
		exam: {
			_id: '61e38fcc00f9b7b714a8a8fa',
			name: 'Toán cao cấp',
			openedAt: '2022-01-16T02:11:31.810Z',
			closedAt: '2022-01-16T02:11:31.810Z',
			creator: {
				_id: '61cf495623ef54e066d11ebb',
				name: 'Giáo viên 2',
			},
			attemptLimit: 1,
			minuteLimit: 15,
			questions: ['61e38fca00f9b7b714a8a8ee', '61e38fcc00f9b7b714a8a8f8'],
			subject: 'Toán',
			grade: 12,
			isDeleted: false,
			__v: 0,
		},
		attempt: 1,
		submittedAt: '2022-01-16T08:34:24.638Z',
		secondTaken: 21,
		options: [
			{
				question: {
					_id: '61e38fca00f9b7b714a8a8ee',
					content: 'A = [1, 2, 4]\nB = [2, 4, 5]\nA + B = ????',
					options: [
						{
							_id: '61e38fca00f9b7b714a8a8e6',
							content: '[3, 6, 9]',
							__v: 0,
						},
						{
							_id: '61e38fca00f9b7b714a8a8e8',
							content: '[1, 6, 9]',
							__v: 0,
						},
						{
							_id: '61e38fca00f9b7b714a8a8ea',
							content: '[3, 5, 9]',
							__v: 0,
						},
						{
							_id: '61e38fca00f9b7b714a8a8ec',
							content: '[3, 6, 3]',
							__v: 0,
						},
					],
					correctOption: {
						_id: '61e38fca00f9b7b714a8a8e6',
						content: '[3, 6, 9]',
						__v: 0,
					},
				},
				option: {
					_id: '61e38fca00f9b7b714a8a8ea',
					content: '[3, 5, 9]',
					__v: 0,
				},
				_id: '61e3e15e3b7773d24d08c2ef',
			},
			{
				question: {
					_id: '61e38fcc00f9b7b714a8a8f8',
					content: 'A = [5, 7, 4]\nB = [2, 6, 5]\nA - B = ????',
					options: [
						{
							_id: '61e38fcb00f9b7b714a8a8f0',
							content: '[1, 5, 4]',
							__v: 0,
						},
						{
							_id: '61e38fcb00f9b7b714a8a8f2',
							content: '[3, 1, -1]',
							__v: 0,
						},
						{
							_id: '61e38fcb00f9b7b714a8a8f4',
							content: '[3, 1, 1]',
							__v: 0,
						},
						{
							_id: '61e38fcb00f9b7b714a8a8f6',
							content: '[4, 1, -1]',
							__v: 0,
						},
					],
					correctOption: {
						_id: '61e38fcb00f9b7b714a8a8f2',
						content: '[3, 1, -1]',
						__v: 0,
					},
				},
				option: {
					_id: '61e38fcb00f9b7b714a8a8f2',
					content: '[3, 1, -1]',
					__v: 0,
				},
				_id: '61e3e15e3b7773d24d08c2f0',
			},
		],
		outOf: 1,
		__v: 0,
	});
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const handleGetResult = async () => {
	// 		try {
	// 			const url = `${process.env.REACT_APP_API_URL}/exams/${examId}/review`;
	// 			const res = await axios.get(url, {
	// 				headers: {
	// 					access_token:
	// 						'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1MmNmYTc2YTcxNzJlMDFiMTY2ZTgiLCJpYXQiOjE2NTI4NDc2NDcsImV4cCI6MTY1MzEwNjg0N30.7C1fIm7vVjaHBHRhaB7KaxnKDljXXNSnwEvPVvdJztM',
	// 				},
	// 			});
	// 			console.log(res.data);
	// 			setExamReview(res.data);
	// 			setLoading(true);
	// 		} catch (error) {
	// 			console.log('Failed to fetch exam result:', error);
	// 		}
	// 	};
	// 	handleGetResult();
	// }, [examId]);

	return (
		<div>
			<section className="w-full min-h-[76.5vh]">
				{loading ? <ViewResult examReview={examReview} /> : <Loading />}
			</section>
		</div>
	);
}

export default ExamResult;
