// Done form: question-answer-rightAnswer - 14-10-2021

const modifiedQuestion = (data) => {
	data['numOfQuestions'] = data.questionList.length;
	const arr = data.questionList;
	if (!arr) return;
	arr.forEach((e, i, arr) => {
		arr[i].answerList = e.answerList.map((e) => ({ content: e }));
	});

	//const keys = Object.keys(data.questions).sort();
	// let arr = [];

	// for (let i = 0; i < keys.length / 6; i++) {
	// 	let ar = [];
	// 	let obj = {};
	// 	keys.slice(6 * i, 6 * (i + 1)).forEach((key, index) => {
	// 		if (index === 0) {
	// 			obj["question"] = data[key];
	// 		} else if (index >= 1 && index <= 4) {
	// 			ar.push(data[key]);
	// 		} else {
	// 			obj["correctAnswer"] = data[key];
	// 		}
	// 	});
	// 	obj["answers"] = ar;
	// 	arr.push(obj);
	// }
};

export { modifiedQuestion };
