import React, { useEffect, useState } from 'react';
import ExamBody from '../components/ExamBody';
import ExamForm from '../components/ExamForm';
import StateBox from '../components/StateBox';
import Timer from '../components/Timer';

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
				options: [
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
				options: [
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
				options: [
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
	// const [loading, setLoading] = useState(false);

	useEffect(() => {
		setAnswers(new Array(exam.length).fill());
	}, []);
	useEffect(() => {}, [answers]);
	const handleChooseAnswer = (index, answer) => {
		const newAnswers = [...answers];
		newAnswers[index] = answer;
		setAnswers(newAnswers);
	};
	return (
		<div className="exam">
			<div className="flex-1 flex flex-col mx-6 sm:mx-10 px-2 sm:px-10 py-10 bg-gray-200 bg-opacity-30 shadow-lg">
				<ExamBody exam={exam} />
				<ExamForm questions={exam.questions} handleChooseAnswer={handleChooseAnswer} />
			</div>
			<div>
				<StateBox answers={answers} />
				<Timer />
			</div>
		</div>
	);
}

export default TakeExam;
