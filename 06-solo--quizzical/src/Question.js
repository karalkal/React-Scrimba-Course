import { useState } from 'react';


export default function Question(props) {
    const questionData = props.question

    // console.log("Question is:", questionData.text, "\nAnswer Array", questionData.answersArr)

    let [answers, setAnswers] = useState(questionData.answersArr)

    return (
        <div>
            <h2 className="question">{questionData.text}</h2>
            <div className="answers--div">

                {answers.map(answer =>
                    <span
                        onClick={() => selectAnswer(answer.id)}
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
}