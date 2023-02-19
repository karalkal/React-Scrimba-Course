export default function Result(props) {
    let answers = props.question.answersArr

    return (
        <div className="container--question--plus--answers">
            <h2 className="question">{props.question.text}</h2>
            <div className="answers--div">

                {answers.map(answer => {
                    const cssClasses = {
                        answerSpan: "answer--span",
                        incorrectSelected: answer.isSelected && !answer.isCorrect && "incorrect--selected",
                        correctSelected: answer.isSelected && answer.isCorrect && "correct--selected",
                        correctNotSelected: !answer.isSelected && answer.isCorrect && "correct--not--selected",
                    }
                    return (

                        <span
                            style={{ cursor: "default" }}
                            key={answer.id}
                            className={`${cssClasses.answerSpan} ${cssClasses.incorrectSelected}  ${cssClasses.correctNotSelected} ${cssClasses.correctSelected}`}
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