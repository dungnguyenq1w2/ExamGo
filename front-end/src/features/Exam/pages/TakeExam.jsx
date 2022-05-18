import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import ExamBody from '../components/ExamBody';
import StateBox from '../components/StateBox';

function TakeExam() {
	// const [exam, setExam] = useState({});
	// const [answers, setAnswers] = useState([]);
	// // const time = useRef(15 * 60);
	// const time = useMemo(() => exam.minuteLimit, [exam]);
	// console.log(time);
	// const [loading, setLoading] = useState(false);
	const { examId } = useParams();

	// useEffect(() => {
	// 	const fetchedExam = {
	// 		_id: '61e3f41a3b7773d24d08c683',
	// 		name: 'Đề kiểm tra 15 phút Lịch Sử 12',
	// 		openedAt: '2022-01-16T08:34:24.636Z',
	// 		closedAt: '2022-01-16T08:34:24.636Z',
	// 		creator: {
	// 			_id: '61cf495623ef54e066d11ebb',
	// 			name: 'Giáo viên 2',
	// 		},
	// 		attemptLimit: 1,
	// 		minuteLimit: 15,
	// 		questions: [
	// 			{
	// 				_id: '61e3f4183b7773d24d08c66d',
	// 				content: 'Hội nghị Ianta (1945) có sự tham gia của các nước nào?',
	// 				answers: [
	// 					{
	// 						_id: '61e3f4173b7773d24d08c665',
	// 						content: 'Anh - Pháp - Mĩ.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f4173b7773d24d08c667',
	// 						content: 'Anh - Mĩ - Liên Xô.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f457f5ee57a712a933c2',
	// 						content: 'Anh - Pháp',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f4183b7773d24d08c66b',
	// 						content: 'Mĩ - Liên Xô - Trung Quốc.',
	// 						__v: 0,
	// 					},
	// 				],
	// 			},
	// 			{
	// 				_id: '61e3f4193b7773d24d08c677',
	// 				content:
	// 					'Tương lai của Nhật Bản được quyết định như thế nào theo Hội nghị Ianta (2-1945)?',
	// 				answers: [
	// 					{
	// 						_id: '61e3f4183b7773d24d08c66f',
	// 						content: 'Nhật Bản bị quân đội Mĩ chiếm đóng.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f4183b7773d24d08c671',
	// 						content: 'Nhật Bản vẫn giữ nguyên trạng.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f4193b7773d24d08c673',
	// 						content:
	// 							'Quân đội Liên Xô chiếm 4 đảo thuộc quần đảo Curin của Nhật Bản.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f4193b7773d24d08c675',
	// 						content: 'Nhật Bản trở thành thuộc địa kiểu mới của Mĩ.',
	// 						__v: 0,
	// 					},
	// 				],
	// 			},
	// 			{
	// 				_id: '61e3f41a3b7773d24d08c681',
	// 				content:
	// 					'Hội nghị Ianta được triệu tập vào thời điểm nào của cuộc Chiến tranh thế giới thứ hai (1939 – 1945)?',
	// 				answers: [
	// 					{
	// 						_id: '61e3f4193b7773d24d08c679',
	// 						content: 'Chiến tranh thế giới thứ hai bùng nổ',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f41a3b7773d24d08c67b',
	// 						content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn ác liệt',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f41a3b7773d24d08c67d',
	// 						content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f459f5ee57a712a938fc',
	// 						content: 'Chiến tranh thế giới thứ hai bắt đầu',
	// 						__v: 0,
	// 					},
	// 				],
	// 			},
	// 			{
	// 				_id: '61e3f45bf5ee57a712a93c0a',
	// 				content:
	// 					'Theo quyết định của hội nghị Ianta (2-1945), quốc gia nào cần phải trở thành một quốc gia thống nhất và dân chủ?',
	// 				answers: [
	// 					{
	// 						_id: '61e3f45af5ee57a712a93a08',
	// 						content: 'Đức',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f45af5ee57a712a93aa3',
	// 						content: 'Mông Cổ',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61cb27844e269af4d8615be3',
	// 						content: 'Trung Quốc',
	// 						__v: 0,
	// 					},
	// 					{
	// 						_id: '61e3f45af5ee57a712a93bbf',
	// 						content: 'Triều Tiên',
	// 						__v: 0,
	// 					},
	// 				],
	// 			},
	// 		],
	// 		subject: 'Lịch sử',
	// 		grade: 12,
	// 		isDeleted: false,
	// 		__v: 0,
	// 	};
	// 	setExam(fetchedExam);
	// }, [examId]);

	// useEffect(() => {
	// 	if (exam?.questions?.length) setAnswers(new Array(exam.questions.length).fill());
	// }, [exam]);

	// const handleChooseAnswer = (index, answer) => {
	// 	answer = answer === 0 ? 'A' : answer === 1 ? 'B' : answer === 2 ? 'C' : 'D';
	// 	const newAnswers = [...answers];
	// 	newAnswers[index] = answer;
	// 	setAnswers(newAnswers);
	// };
	const [exam, setExam] = useState({});
	const [loading, setLoading] = useState(false);

	//Fetch dữ liệu
	useEffect(() => {
		const fetchExam = async () => {
			try {
				const url = `${process.env.REACT_APP_API_URL}/exams/${examId}/take`;

				const token = localStorage.getItem('REFRESH_TOKEN');
				const res = await axios.get(url, {
					headers: {
						access_token:
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWQ1MmNmYTc2YTcxNzJlMDFiMTY2ZTgiLCJpYXQiOjE2NTI4NDc2NDcsImV4cCI6MTY1MzEwNjg0N30.7C1fIm7vVjaHBHRhaB7KaxnKDljXXNSnwEvPVvdJztM',
					},
				});

				localStorage.setItem(`time_${examId}`, res.data.minuteLimit);
				if (!localStorage.getItem(`startTime_${examId}`))
					localStorage.setItem(
						`startTime_${examId}`,
						moment().format('DD/MM/YYYY HH:mm:ss'),
					);

				setExam(res.data);
				setLoading(true);
			} catch (error) {
				console.log('Failed to fetch exam:', error);
			}
		};
		fetchExam();
	}, [examId]);

	return (
		// <div className="relative">
		// 	<div className="flex-1 flex flex-col mx-6 sm:mx-10 px-2 sm:px-10 py-10 bg-gray-200 bg-opacity-30 shadow-lg">
		// 		<div className="">
		// 			<div>
		// 				<span className="text-3xl font-bold text-green-800">{exam?.subject} |</span>
		// 				<span className="text-yellow-500 text-2xl font-semibold">
		// 					| {exam?.name}
		// 				</span>
		// 			</div>
		// 			<div className="items-center mt-4">
		// 				<span className="text-xl font-semibold ml-12">Lớp: {exam?.grade}</span>
		// 				<span className="text-lg font-semibold ml-5">
		// 					Thời gian: {exam?.minuteLimit} phút
		// 				</span>
		// 				<span className="text-lg font-semibold ml-5">
		// 					Người ra đề: {exam?.creator?.name}
		// 				</span>
		// 			</div>
		// 		</div>
		// 		<ExamForm questions={exam.questions} handleChooseAnswer={handleChooseAnswer} />
		// 	</div>
		// 	<div className="fixed top-28 right-5 bg-indigo-300 bg-opacity-40 rounded-lg p-2 m-10">
		// 		<div className="grid grid-flow-row grid-cols-5 gap-3 p-2">
		// 			{answers?.map((value, index) => (
		// 				<AnswerBox key={index} question={index + 1} answer={value} />
		// 			))}
		// 		</div>
		// 		{/* <StateBox
		// 		// minuteLimit={exam.minuteLimit}
		// 		// handleSaveTime={handleSaveTime}
		// 		// examId={examId}
		// 		/> */}
		// 	</div>
		// </div>
		<div className="min-h-screen">
			{loading ? (
				<div className="flex justify-between my-10 flex-col md:flex-row">
					<ExamBody exam={exam} />
					<StateBox id={exam._id} />
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default TakeExam;
