import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal/lib/components/Modal';
import Question from './Question';

const customStyles = {
	content: {
		textAlign: 'center',
		padding: '30px 60px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

function ExamForm({ questions, handleChooseAnswer }) {
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [submit, setSubmit] = useState(false); // Xử lý hết thời gian
	const { register, handleSubmit, watch, setValue } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		// const startTime = localStorage.getItem(`startTime_${idExam}`);
		// const takingTime = diffTime(startTime);
		// data = modifiedOption(data, takingTime);
		setLoading(true);
		// const handleSubmitExam = async () => {
		// 	try {
		// 		const res = await axios.post(
		// 			`${process.env.NEXT_PUBLIC_API_URL}/exams/${router.query.idExam}/take`,
		// 			data,
		// 			{
		// 				headers: {
		// 					access_token: localStorage.getItem('REFRESH_TOKEN'),
		// 				},
		// 			},
		// 		);
		// 		if (res.data) {
		// 			setIsSuccess(true);
		// 			setTimeout(() => {
		// 				router.push({
		// 					pathname: 'result',
		// 					query: {
		// 						idExam: idExam,
		// 					},
		// 				});
		// 			}, 1000);
		// 		}
		// 	} catch (error) {
		// 		console.log('Failed to submit exam:', error);
		// 	}
		// };
		// handleSubmitExam();
		// // Submit thành công thì xóa các field trong localStorage
		// localStorage.removeItem(`remainTimeSaved_${router.query.idExam}`);
		// localStorage.removeItem(`currentTimeSaved_${router.query.idExam}`);
		// localStorage.removeItem(`time_${router.query.idExam}`);
		// localStorage.removeItem(`startTime_${router.query.idExam}`);
		// localStorage.removeItem('undefined');
		// localStorage.removeItem(router.query.idExam);
	};

	const checkKeyDown = (e) => {
		if (e.code === 'Enter') e.preventDefault();
	};

	const buttonSubmit = useRef(); // sử dụng useRef để lấy ra button submit (tương tự document.getElement...)
	return (
		<div className="w-4/5">
			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyDown={(e) => checkKeyDown(e)} // Chặn user ấn Enter
			>
				{questions?.map((question, idxQuestion) => (
					<Question
						key={question._id}
						content={question.content}
						idxQuestion={idxQuestion}
						answers={question.answers}
						handleChooseAnswer={handleChooseAnswer}
						register={register}
						label={`answer${idxQuestion}`}
					/>
					// <div key={question._id}>
					// 	<h4>{question.content}</h4>
					// 	{question?.answers &&
					// 		question.answers.map((answer, idxAnswer) => (
					// 			<h5
					// 				key={answer._id}
					// 				onClick={() => handleChooseAnswer(idxQuestion, idxAnswer)}
					// 			>
					// 				{answer.content}
					// 			</h5>
					// 		))}
					// 	{/* <h5 onClick={() => handleChooseAnswer(i, 0)}>{e?.answers[0]?.content}</h5>
					// 	<h5 onClick={() => handleChooseAnswer(i, 1)}>{e.answers}</h5>
					// 	<h5 onClick={() => handleChooseAnswer(i, 2)}>{e.answers}</h5>
					// 	<h5 onClick={() => handleChooseAnswer(i, 3)}>{e.answers}</h5> */}
					// </div>
				))}
				{/* button thật để submit form, user sẽ không click được, khi nào xác nhận
                nộp bài (button Modal) hoặc hết giờ làm bài thì mới gọi ref để click */}
				<button className="hidden" ref={buttonSubmit} type="submit">
					Submit
				</button>
			</form>
			{/* button submit giả cho user click để hiện Modal xác nhận nộp bài*/}
			<div className="flex justify-center ">
				<button
					className="bg-blue-400 py-2 px-8 mt-4 font-bold text-gray-50 text-xl rounded-lg"
					onClick={() => setSubmit(true)}
				>
					NỘP BÀI
				</button>
			</div>
			<Modal isOpen={submit} style={customStyles} contentLabel="Modal" ariaHideApp={false}>
				{loading ? (
					isSuccess ? (
						<h2 className="font-bold text-xl text-green-500">Thành công</h2>
					) : (
						<div className="flex items-center">
							<h2 className="font-bold text-xl text-blue-600 mr-3 ">
								Đang nộp bài ...
							</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="animate-bounce h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								/>
							</svg>
						</div>
					)
				) : (
					<>
						<h2 className="font-bold text-xl text-red-500">Xác nhận nộp bài</h2>
						{/* nếu click thì gọi ref của button submit thật để submit */}

						<div className="flex justify-around mt-5">
							<button
								className="bg-blue-400 py-2 px-8 mt-4 mr-3 font-bold text-gray-50 text-lg rounded-lg"
								onClick={() => buttonSubmit.current.click()}
							>
								Nộp bài
							</button>
							<button
								className="bg-yellow-400 py-2 px-8 mt-4 ml-3 font-bold text-gray-50 text-lg rounded-lg"
								onClick={() => setSubmit(false)}
							>
								Làm bài tiếp
							</button>
						</div>
					</>
				)}
			</Modal>
		</div>
	);
}

export default ExamForm;
