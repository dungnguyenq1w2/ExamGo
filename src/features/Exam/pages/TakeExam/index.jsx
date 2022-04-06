import React, { useState } from "react";
import StateBox from "../../components/StateBox";
import Timer from "../../components/Timer";

function TakeExam() {
	const [exams, setExams] = useState([
		{
			question: "What is your name?",
			chosenAnswer: "B",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			chosenAnswer: "C",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			chosenAnswer: "C",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			chosenAnswer: "D",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
		{
			question: "What is your name?",
			chosenAnswer: "B",
			correctAnswer: "A",
			answers: ["Nguyễn Văn A", "Phạm Thị B", "Lê Văn C", "Trần Thị D "],
		},
		{
			question: "How old are you?",
			chosenAnswer: "C",
			correctAnswer: "C",
			answers: ["12", "18", "20", "22"],
		},
		{
			question: "Where are you live?",
			chosenAnswer: "C",
			correctAnswer: "B",
			answers: ["TP. Hồ Chí Minh", "Đồng Nai", "Bình Dương", "Khánh Hoà"],
		},
		{
			question: "Which major are you studying? ",
			chosenAnswer: "D",
			correctAnswer: "D",
			answers: [
				"Computer Sience",
				"Information Systems",
				"Information Technology",
				"Software Engineering",
			],
		},
	]);
	const [choices, setChoices] = useState([]);
	const [loading, setLoading] = useState(false);
	return (
		<div className="exam">
			<div>
				<StateBox />
				<Timer />
			</div>
		</div>
	);
}

export default TakeExam;
