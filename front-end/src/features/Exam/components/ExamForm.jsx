import React from 'react';

function ExamForm({ questions, handleChooseAnswer }) {
	console.log(questions[0].answers[0].content);
	return (
		<div>
			{questions?.map((e, i) => (
				<div key={e._id}>
					<h4>{e.content}</h4>
					{/* <h5 onClick={() => handleChooseAnswer(i, 0)}>{e?.answers[0]?.content}</h5>
					<h5 onClick={() => handleChooseAnswer(i, 1)}>{e.answers}</h5>
					<h5 onClick={() => handleChooseAnswer(i, 2)}>{e.answers}</h5>
					<h5 onClick={() => handleChooseAnswer(i, 3)}>{e.answers}</h5> */}
				</div>
			))}
		</div>
	);
}

export default ExamForm;
