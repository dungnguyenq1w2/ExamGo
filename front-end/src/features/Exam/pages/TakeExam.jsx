import React, { useEffect, useState } from 'react';
import ExamForm from '../components/ExamForm';
import StateBox from '../components/StateBox';
import Timer from '../components/Timer';
import Countdown from 'react-countdown';

function TakeExam() {
	const [exam, setExam] = useState({
		_id: '61e3f41a3b7773d24d08c683',
		name: 'Đề kiểm tra 15 phút Lịch Sử 12',
		openedAt: '2022-01-16T08:34:24.636Z',
		closedAt: '2022-01-16T08:34:24.636Z',
		creator: {
			_id: '61cf495623ef54e066d11ebb',
			name: 'Giáo viên 2',
		},
		attemptLimit: 1,
		minuteLimit: 15,
		questions: [
			{
				_id: '61e3f4183b7773d24d08c66d',
				content: 'Hội nghị Ianta (1945) có sự tham gia của các nước nào?',
				answers: [
					{
						_id: '61e3f4173b7773d24d08c665',
						content: 'Anh - Pháp - Mĩ.',
						__v: 0,
					},
					{
						_id: '61e3f4173b7773d24d08c667',
						content: 'Anh - Mĩ - Liên Xô.',
						__v: 0,
					},
					{
						_id: '61e3f457f5ee57a712a933c2',
						content: 'Anh - Pháp',
						__v: 0,
					},
					{
						_id: '61e3f4183b7773d24d08c66b',
						content: 'Mĩ - Liên Xô - Trung Quốc.',
						__v: 0,
					},
				],
			},
			{
				_id: '61e3f4193b7773d24d08c677',
				content:
					'Tương lai của Nhật Bản được quyết định như thế nào theo Hội nghị Ianta (2-1945)?',
				answers: [
					{
						_id: '61e3f4183b7773d24d08c66f',
						content: 'Nhật Bản bị quân đội Mĩ chiếm đóng.',
						__v: 0,
					},
					{
						_id: '61e3f4183b7773d24d08c671',
						content: 'Nhật Bản vẫn giữ nguyên trạng.',
						__v: 0,
					},
					{
						_id: '61e3f4193b7773d24d08c673',
						content: 'Quân đội Liên Xô chiếm 4 đảo thuộc quần đảo Curin của Nhật Bản.',
						__v: 0,
					},
					{
						_id: '61e3f4193b7773d24d08c675',
						content: 'Nhật Bản trở thành thuộc địa kiểu mới của Mĩ.',
						__v: 0,
					},
				],
			},
			{
				_id: '61e3f41a3b7773d24d08c681',
				content:
					'Hội nghị Ianta được triệu tập vào thời điểm nào của cuộc Chiến tranh thế giới thứ hai (1939 – 1945)?',
				answers: [
					{
						_id: '61e3f4193b7773d24d08c679',
						content: 'Chiến tranh thế giới thứ hai bùng nổ',
						__v: 0,
					},
					{
						_id: '61e3f41a3b7773d24d08c67b',
						content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn ác liệt',
						__v: 0,
					},
					{
						_id: '61e3f41a3b7773d24d08c67d',
						content: 'Chiến tranh thế giới thứ hai bước vào giai đoạn kết thúc.',
						__v: 0,
					},
					{
						_id: '61e3f459f5ee57a712a938fc',
						content: 'Chiến tranh thế giới thứ hai bắt đầu',
						__v: 0,
					},
				],
			},
			{
				_id: '61e3f45bf5ee57a712a93c0a',
				content:
					'Theo quyết định của hội nghị Ianta (2-1945), quốc gia nào cần phải trở thành một quốc gia thống nhất và dân chủ?',
				answers: [
					{
						_id: '61e3f45af5ee57a712a93a08',
						content: 'Đức',
						__v: 0,
					},
					{
						_id: '61e3f45af5ee57a712a93aa3',
						content: 'Mông Cổ',
						__v: 0,
					},
					{
						_id: '61cb27844e269af4d8615be3',
						content: 'Trung Quốc',
						__v: 0,
					},
					{
						_id: '61e3f45af5ee57a712a93bbf',
						content: 'Triều Tiên',
						__v: 0,
					},
				],
			},
		],
		subject: 'Lịch sử',
		grade: 12,
		isDeleted: false,
		__v: 0,
	});
	const [answers, setAnswers] = useState([]);
	const [time, setTime] = useState(exam.minuteLimit * 60);
	const [timeRemain, setTimeRemain] = useState(15 * 60);
	// const [loading, setLoading] = useState(false);

	useEffect(() => {
		setAnswers(new Array(exam.questions.length).fill());
	}, []);

	// useEffect(() => {}, [answers]);
	const handleChooseAnswer = (index, answer) => {
		answer = answer === 0 ? 'A' : answer === 1 ? 'B' : answer === 2 ? 'C' : 'D';
		const newAnswers = [...answers];
		newAnswers[index] = answer;
		setAnswers(newAnswers);
	};

	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return (
				<div className="py-10 w-52 flex justify-center">
					<div className="h-16 w-40 border-2 border-red-500 flex flex-col items-center rounded-xl justify-center">
						<h1 className="text-red-600 font-bold text-3xl">HẾT GIỜ</h1>
					</div>
				</div>
			);
		} else {
			// Render a countdown
			return <Timer hours={hours} minutes={minutes} seconds={seconds} />;
		}
	};

	return (
		<div className="relative">
			<div className="flex-1 flex flex-col mx-6 sm:mx-10 px-2 sm:px-10 py-10 bg-gray-200 bg-opacity-30 shadow-lg">
				<div className="">
					<div>
						<span className="text-3xl font-bold text-green-800">{exam?.subject} |</span>
						<span className="text-yellow-500 text-2xl font-semibold">
							| {exam?.name}
						</span>
					</div>
					<div className="items-center mt-4">
						<span className="text-xl font-semibold ml-12">Lớp: {exam?.grade}</span>
						<span className="text-lg font-semibold ml-5">
							Thời gian: {exam?.minuteLimit} phút
						</span>
						<span className="text-lg font-semibold ml-5">
							Người ra đề: {exam?.creator?.name}
						</span>
					</div>
				</div>
				<ExamForm questions={exam.questions} handleChooseAnswer={handleChooseAnswer} />
			</div>
			<div className="fixed top-28 right-5 bg-indigo-300 bg-opacity-40 rounded-lg p-2 m-10">
				<StateBox answers={answers} />
				<Countdown
					date={Date.now() + (time != timeRemain ? timeRemain : time) * 1000}
					renderer={renderer}
					// onComplete={() => dispatch(timeout(true))}
				/>
			</div>
		</div>
	);
}

export default TakeExam;
