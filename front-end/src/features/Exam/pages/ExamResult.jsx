import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ViewResult from '../components/ViewResult';

function ExamResult() {
	const { examId } = useParams();
	const [examReview, setExamReview] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleGetResult = async () => {
			try {
				const url = `${process.env.REACT_APP_API_URL}/exams/${examId}/review`;
				const res = await axios.get(url, {
					headers: {
						access_token:
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1MmNmYTc2YTcxNzJlMDFiMTY2ZTgiLCJpYXQiOjE2NTI4NDc2NDcsImV4cCI6MTY1MzEwNjg0N30.7C1fIm7vVjaHBHRhaB7KaxnKDljXXNSnwEvPVvdJztM',
					},
				});
				setExamReview(res.data);
				setLoading(true);
			} catch (error) {
				console.log('Failed to fetch exam result:', error);
			}
		};
		handleGetResult();
	}, [examId]);
	return (
		<div>
			<section className="w-full min-h-[76.5vh]">
				{loading ? <ViewResult examReview={examReview} /> : <Loading />}
			</section>
		</div>
	);
}

export default ExamResult;
