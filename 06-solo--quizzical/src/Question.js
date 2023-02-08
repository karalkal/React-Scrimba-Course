import React from "react"
import { decode } from 'html-entities';

export default function Question(props) {

    let question = decode(props.q.question)

    // let question = props.q.question
    let correctAnswer = props.q.correct_answer
    let incorrectAnswers = props.q.incorrect_answers
    let shuffledAnswers = shuffle(correctAnswer, incorrectAnswers)

    return (
        <div className="q-and-a--div">
            <h2 className="question">{question}</h2>
            <div className="answers--div"> {shuffledAnswers.map(answer =>
                (<span className="answer--span">{answer}</span>)
            )}
            </div>
            <hr />
            {/* <button onClick={props.handleClick}>Start quiz</button> */}
        </div>
    )    
}

function shuffle(correctAnswer, incorrectAnswers) {
    let answers = [correctAnswer, ...incorrectAnswers]
    // console.log("PRE-shuffle", answers)
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answers[i];
        answers[i] = answers[j];
        answers[j] = temp;
    }
    // console.log("POST-shuffle", answers)
    return answers
}