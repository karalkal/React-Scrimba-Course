export default function Result(props) {
    let answers = props.question.answersArr

    return (
        <div>
            <h2 className="question">{props.question.text}</h2>
            <div className="answers--div">

                {answers.map(answer => {
                    const cssClasses = {
                        answerSpan: "answer--span",
                        selectedIncorrect: answer.isSelected && !answer.isCorrect && "incorrect",
                        correct: answer.isCorrect && "correct",
                        // selectedCorrect:  answer.isSelected && answer.isCorrect && "correct",
                    }
                    return (

                        <span
                            key={answer.id}
                            className={`${cssClasses.answerSpan} ${cssClasses.selectedIncorrect}  ${cssClasses.correct} ${cssClasses.selectedCorrect}`}
                        >
                            {answer.text}
                        </span>)

                }
                )}

            </div>
            <hr />
        </div>
    )
}