import React from "react";

function ExamForm({ exam, handleChooseAnswer }) {
    return (
        <div>
            {exam?.map((e, i) => (
                <div key={e.question}>
                    <h4>{e.question}</h4>
                    <h5 onClick={() => handleChooseAnswer(i, 0)}>
                        {e.answers[0]}
                    </h5>
                    <h5 onClick={() => handleChooseAnswer(i, 1)}>
                        {e.answers[1]}
                    </h5>
                    <h5 onClick={() => handleChooseAnswer(i, 2)}>
                        {e.answers[2]}
                    </h5>
                    <h5 onClick={() => handleChooseAnswer(i, 3)}>
                        {e.answers[3]}
                    </h5>
                </div>
            ))}
        </div>
    );
}

export default ExamForm;
