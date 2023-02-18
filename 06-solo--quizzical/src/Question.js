import { useState } from 'react';


export default function Question(props) {
    let answers = props.question.answersArr

    return (
        <div>
            <h2 className="question">{props.question.text}</h2>
            <div className="answers--div">

                {answers.map(answer =>
                    <span
                        key={answer.id}
                        onClick={() => props.selectAnswer(props.question.id, answer.id)}  // pass back Question ID and Answer ID
                        className={answer.isSelected
                            ? "answer--span selected"
                            : "answer--span not--selected"}
                    >
                        {answer.text}
                    </span>
                )}

            </div>
            <hr />
        </div>
    )

    /*
        function selectAnswer(selectedIndex) {
            setAnswers(prevArr => prevArr.map(answer => {
                return answer.id === selectedIndex
                    ? {
                        ...answer,
                        isSelected: true,
                    }
                    : {
                        ...answer,
                        isSelected: false
                    }
            }))
        }
        */
}