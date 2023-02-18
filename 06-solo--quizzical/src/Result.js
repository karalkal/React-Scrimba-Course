export default function Result(props) {
    let answers = props.question.answersArr

    return (
        <div>
            <h2 className="question">{props.question.text}</h2>
            <div className="answers--div">

                {answers.map(answer => {
                    const cssClasses = {
                        answerSpan: "answer--span",
                        selected: answer.isSelected ? "selected" : "not--selected",
                        correct: answer.isCorrect ? "correct" : "incorrect",
                    }
                    return (

                        <span
                            key={answer.id}
                            className={`${cssClasses.answerSpan} ${cssClasses.selected} ${cssClasses.correct}`}
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