import React, { useEffect, useState } from "react";
import ExamForm from "../components/ExamForm";
import StateBox from "../components/StateBox";
import Timer from "../components/Timer";

function TakeExam() {
    const [exam, setExam] = useState([
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
            <ExamForm exam={exam} handleChooseAnswer={handleChooseAnswer} />
            <div>
                <StateBox answers={answers} />
                <Timer />
            </div>
        </div>
    );
}

export default TakeExam;
