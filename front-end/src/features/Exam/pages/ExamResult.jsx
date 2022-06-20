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
		id: 16,
		name: 'Đề thi 45 phút Lịch Sử',
		maxDuration: 45,
		duration: 10,
		submitTime: '2022-06-20T22:58:45',
		point: 10.0,
		teacher: 'Lê Ngọc Du 1',
		subject: 'Hóa Học',
		questionResultList: [
			{
				id: 15,
				content: 'Câu hỏi 1',
				correctAnswerId: 41,
				chosenAnswerId: 41,
				answerList: [
					{
						id: 41,
						content: 'Đáp án 1',
						questionId: 15,
					},
					{
						id: 42,
						content: 'Đáp án 2',
						questionId: 15,
					},
					{
						id: 43,
						content: 'Đáp án 3',
						questionId: 15,
					},
					{
						id: 44,
						content: 'Đáp án 4',
						questionId: 15,
					},
				],
			},
			{
				id: 16,
				content: 'Câu hỏi 1',
				correctAnswerId: 45,
				chosenAnswerId: 45,
				answerList: [
					{
						id: 45,
						content: 'Đáp án 1',
						questionId: 16,
					},
					{
						id: 46,
						content: 'Đáp án 2',
						questionId: 16,
					},
					{
						id: 47,
						content: 'Đáp án 3',
						questionId: 16,
					},
					{
						id: 48,
						content: 'Đáp án 4',
						questionId: 16,
					},
				],
			},
		],
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
