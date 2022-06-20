import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ViewDetail from '../components/ViewDetail';

function ExamDetail() {
	const { examId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const [examReview, setExamReview] = useState();
	useEffect(() => {
		setExamReview(JSON.parse(searchParams.get('examDetail')));
	}, [searchParams]);
	const [loading, setLoading] = useState(true);
	return (
		<div>
			<section className="w-full min-h-[76.5vh]">
				{loading ? <ViewDetail examReview={examReview} /> : <Loading />}
			</section>
		</div>
	);
}

export default ExamDetail;
