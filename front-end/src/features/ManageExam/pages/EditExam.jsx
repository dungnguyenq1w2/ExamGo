import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import EditExamForm from '../components/EditExamForm';

function EditExam() {
	const [exam, setExam] = useState({
		id: 18,
		name: 'Đề thi Toán 1',
		maxDuration: 60,
		createdTime: '2022-06-23T19:43:35',
		teacherId: 10,
		subjectId: 1,
		numOfQuestions: 3,
		questionList: [
			{
				id: 19,
				content: '1 + 1 = ',
				correctAnswerId: 58,
				answerList: [
					{
						id: 57,
						content: '3',
					},
					{
						id: 58,
						content: '2',
					},
					{
						id: 59,
						content: '3',
					},
					{
						id: 60,
						content: '4',
					},
				],
			},
			{
				id: 20,
				content: '1 + 2 = ',
				correctAnswerId: 63,
				answerList: [
					{
						id: 61,
						content: '1',
					},
					{
						id: 62,
						content: '2',
					},
					{
						id: 63,
						content: '3',
					},
					{
						id: 64,
						content: '4',
					},
				],
			},
			{
				id: 21,
				content: '1 + 3 = ',
				correctAnswerId: 68,
				answerList: [
					{
						id: 65,
						content: '1',
					},
					{
						id: 66,
						content: '2',
					},
					{
						id: 67,
						content: '3',
					},
					{
						id: 68,
						content: '4',
					},
				],
			},
			,
		],
	});
	const { examId } = useParams();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchExam = async () => {
			setLoading(true);
			try {
				const url = `${process.env.REACT_APP_API_URL}/manageexam/${examId}`;
				const token = localStorage.getItem('TOKEN');
				const res = await axios.get(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				if (res.data) {
					console.log(res.data);
					setExam(res.data);
					setLoading(false);
				}
			} catch (error) {
				setLoading(false);
				console.log('Failed to fetch exam:', error);
			}
		};
		fetchExam();
	}, [examId]);

	return (
		<div className="p-5">
			{loading ? <Loading /> : <EditExamForm examId={examId} exam={exam} />}
		</div>
	);
}

export default EditExam;
